// src/pages/AdminDashboard.tsx

import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  LogOut, 
  Mail, 
  Eye, 
  Trash2, 
  MessageSquare, 
  Clock, 
  CheckCircle, 
  Reply,
  Search,
  Filter
} from 'lucide-react';

interface Contact {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  created_at: string;
  updated_at: string;
}

const AdminDashboard = () => {
  const { logout } = useAuth();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'new' | 'read' | 'replied'>('all');

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    try {
      const response = await fetch('https://portfolio-backend-etrn.onrender.com');
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error('Error loading contacts from API:', error);
    }
  };

  const updateContactStatus = async (id: string, status: 'new' | 'read' | 'replied') => {
    try {
      await fetch(`https://portfolio-backend-etrn.onrender.com/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      loadContacts();
      if (selectedContact?.id === id) {
        setSelectedContact({ ...selectedContact, status, updated_at: new Date().toISOString() });
      }
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  const handleDeleteContact = async (id: string) => {
    try {
      await fetch(`https://portfolio-backend-etrn.onrender.com/${id}`, {
        method: 'DELETE',
      });
      loadContacts();
      if (selectedContact?.id === id) {
        setSelectedContact(null); // Deselect if deleted
      }
    } catch (error) {
      console.error('Failed to delete contact:', error);
    }
  };

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || contact.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'read': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'replied': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'new': return <Mail className="w-4 h-4" />;
      case 'read': return <Eye className="w-4 h-4" />;
      case 'replied': return <Reply className="w-4 h-4" />;
      default: return <MessageSquare className="w-4 h-4" />;
    }
  };

  const stats = {
    total: contacts.length,
    new: contacts.filter(c => c.status === 'new').length,
    read: contacts.filter(c => c.status === 'read').length,
    replied: contacts.filter(c => c.status === 'replied').length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Header */}
      <header className="bg-gray-800/50 backdrop-blur-xl border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Admin Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-300">Welcome, Admin</span>
              <button
                onClick={logout}
                className="flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-300"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Contacts', value: stats.total, icon: MessageSquare, color: 'from-blue-600 to-cyan-600' },
            { label: 'New Messages', value: stats.new, icon: Mail, color: 'from-blue-600 to-blue-400' },
            { label: 'Read Messages', value: stats.read, icon: Eye, color: 'from-yellow-600 to-yellow-400' },
            { label: 'Replied', value: stats.replied, icon: CheckCircle, color: 'from-green-600 to-green-400' },
          ].map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                </div>
                <div className={`p-3 bg-gradient-to-r ${stat.color} rounded-xl`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact List */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 shadow-2xl">
              {/* Filters */}
              <div className="p-6 border-b border-gray-700">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search contacts..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value as any)}
                      className="pl-12 pr-8 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="all">All Status</option>
                      <option value="new">New</option>
                      <option value="read">Read</option>
                      <option value="replied">Replied</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Contact Items */}
              <div className="max-h-96 overflow-y-auto">
                {filteredContacts.length === 0 ? (
                  <div className="p-8 text-center">
                    <MessageSquare className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-400 mb-2">No Contacts Found</h3>
                    <p className="text-gray-500">No contact submissions match your current filters</p>
                  </div>
                ) : (
                  filteredContacts.map((contact) => (
                    <div
                      key={contact.id}
                      onClick={() => {
                        setSelectedContact(contact);
                        if (contact.status === 'new') {
                          updateContactStatus(contact.id, 'read');
                        }
                      }}
                      className={`p-4 border-b border-gray-700 cursor-pointer hover:bg-gray-700/50 transition-colors duration-300 ${
                        selectedContact?.id === contact.id ? 'bg-blue-600/20' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-white">{contact.name}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(contact.status)} flex items-center gap-1`}>
                              {getStatusIcon(contact.status)}
                              {contact.status}
                            </span>
                          </div>
                          <p className="text-gray-400 text-sm mb-1">{contact.email}</p>
                          <p className="text-gray-300 font-medium mb-2">{contact.subject}</p>
                          <p className="text-gray-400 text-sm truncate">{contact.message}</p>
                          <div className="flex items-center text-gray-500 text-xs mt-2">
                            <Clock className="w-3 h-3 mr-1" />
                            {new Date(contact.created_at).toLocaleDateString()} at {new Date(contact.created_at).toLocaleTimeString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Contact Detail */}
          <div className="lg:col-span-1">
            {selectedContact ? (
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 shadow-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-white">Contact Details</h2>
                  <button
                    onClick={() => handleDeleteContact(selectedContact.id)}
                    className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/20 rounded-lg transition-all duration-300"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-gray-400 text-sm">Name</label>
                    <p className="text-white font-medium">{selectedContact.name}</p>
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm">Email</label>
                    <p className="text-white font-medium">{selectedContact.email}</p>
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm">Subject</label>
                    <p className="text-white font-medium">{selectedContact.subject}</p>
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm">Message</label>
                    <div className="bg-gray-700/50 rounded-lg p-4 mt-2">
                      <p className="text-gray-300 leading-relaxed">{selectedContact.message}</p>
                    </div>
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm">Status</label>
                    <div className="flex gap-2 mt-2">
                      {['new', 'read', 'replied'].map((status) => (
                        <button
                          key={status}
                          onClick={() => updateContactStatus(selectedContact.id, status as any)}
                          className={`px-3 py-1 rounded-full text-xs border transition-all duration-300 ${
                            selectedContact.status === status
                              ? getStatusColor(status)
                              : 'bg-gray-700 text-gray-400 border-gray-600 hover:bg-gray-600'
                          }`}
                        >
                          {status}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-700">
                    <div className="flex items-center text-gray-400 text-sm mb-2">
                      <Clock className="w-4 h-4 mr-2" />
                      Received: {new Date(selectedContact.created_at).toLocaleString()}
                    </div>
                    {selectedContact.updated_at !== selectedContact.created_at && (
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-2" />
                        Updated: {new Date(selectedContact.updated_at).toLocaleString()}
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2 pt-4">
                    <a
                      href={`mailto:${selectedContact.email}?subject=Re: ${selectedContact.subject}`}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      Reply via Email
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 shadow-2xl p-6 text-center">
                <MessageSquare className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-400 mb-2">No Contact Selected</h3>
                <p className="text-gray-500">Select a contact from the list to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
