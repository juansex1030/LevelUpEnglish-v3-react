import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import apiClient from '../api/apiClient';
import './Support.css';

const Support = () => {
    const { user } = useAuth();
    const [formData, setFormData] = useState({
        name: user?.username || '',
        email: user?.email || '',
        subject: 'General',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', msg: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', msg: '' });

        try {
            await apiClient.post('/support', {
                ...formData,
                userId: user?.id
            });
            setSubmitted(true);
            setFormData({ ...formData, message: '', subject: 'General' });
        } catch (err) {
            console.error('Support submission error:', err);
            const errorMsg = err.response?.data?.msg || 'Could not send the message. Please try again later.';
            setStatus({ type: 'danger', msg: errorMsg });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="support-page py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="support-card glass-card">
                            <div className="row g-0">
                                {/* Left Side: Form */}
                                <div className="col-md-7 p-4 p-lg-5">
                                    <div className="support-header mb-4">
                                        <h2 className="display-6 fw-bold text-primary">Contact Us</h2>
                                        <p className="text-muted">Do you have any questions, suggestions, or complaints? We're here to listen.</p>
                                    </div>

                                    {status.msg && (
                                        <div className={`alert alert-${status.type} alert-dismissible fade show`} role="alert">
                                            {status.msg}
                                            <button type="button" className="btn-close" onClick={() => setStatus({type: '', msg: ''})}></button>
                                        </div>
                                    )}

                                    {!submitted ? (
                                        <form onSubmit={handleSubmit} className="support-form">
                                            <div className="row g-3">
                                                <div className="col-md-6">
                                                    <label className="form-label small fw-bold text-uppercase">Full Name</label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        placeholder="Your name"
                                                        required 
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="form-label small fw-bold text-uppercase">Email Address</label>
                                                    <input 
                                                        type="email" 
                                                        className="form-control" 
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        placeholder="your@email.com"
                                                        required 
                                                    />
                                                </div>
                                                <div className="col-12">
                                                    <label className="form-label small fw-bold text-uppercase">Subject</label>
                                                    <select 
                                                        className="form-select" 
                                                        name="subject"
                                                        value={formData.subject}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="General">General Inquiry</option>
                                                        <option value="Inquiry">Subject Inquiry</option>
                                                        <option value="Complaint">Complaint / Claim</option>
                                                        <option value="Suggestion">Suggestion</option>
                                                        <option value="Feedback">Feedback</option>
                                                    </select>
                                                </div>
                                                <div className="col-12">
                                                    <label className="form-label small fw-bold text-uppercase">Message</label>
                                                    <textarea 
                                                        className="form-control" 
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        rows="5" 
                                                        placeholder="Write your detailed message here..."
                                                        required
                                                    ></textarea>
                                                </div>
                                                <div className="col-12 mt-4">
                                                    <button type="submit" className="btn btn-primary btn-lg rounded-pill px-5 shadow-sm" disabled={loading}>
                                                        {loading ? (
                                                            <><span className="spinner-border spinner-border-sm me-2"></span>Sending...</>
                                                        ) : (
                                                            <>Send Message <i className="bi bi-send-fill ms-2"></i></>
                                                        )}
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    ) : (
                                        <div className="text-center py-5 fade-in">
                                            <div className="display-1 text-success mb-4">
                                                <i className="bi bi-check-circle-fill"></i>
                                            </div>
                                            <h3 className="fw-bold">Message Sent!</h3>
                                            <p className="text-secondary">Thank you for contacting us. We will review your message soon.</p>
                                            <button className="btn btn-outline-primary rounded-pill mt-4" onClick={() => setSubmitted(false)}>
                                                Send another message
                                            </button>
                                        </div>
                                    )}
                                </div>

                                {/* Right Side: Info */}
                                <div className="col-md-5 support-info-sidebar d-flex flex-column justify-content-center p-5">
                                    <div className="support-info-content text-white">
                                        <h4 className="mb-4">Contact Information</h4>
                                        
                                        <div className="info-item mb-4 d-flex align-items-start">
                                            <div className="info-icon me-3">
                                                <i className="bi bi-envelope-paper-fill"></i>
                                            </div>
                                            <div>
                                                <h6>Direct Email</h6>
                                                <p className="mb-0">lvupenglishco@gmail.com</p>
                                            </div>
                                        </div>

                                        <div className="info-item mb-4 d-flex align-items-start">
                                            <div className="info-icon me-3">
                                                <i className="bi bi-clock-fill"></i>
                                            </div>
                                            <div>
                                                <h6>Response Time</h6>
                                                <p className="mb-0">We usually respond in less than 24 business hours.</p>
                                            </div>
                                        </div>

                                        <div className="support-illustration mt-5 text-center">
                                            <i className="bi bi-headset display-1 opacity-25"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;
