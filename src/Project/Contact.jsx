import React, { useState } from 'react';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const Contact = () => {
  // Ganti dengan Access Key dari Web3Forms
  const ACCESS_KEY = "GANTI_DENGAN_ACCESS_KEY_ANDA"; 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setResponseMessage('');

    const data = {
      ...formData,
      access_key: ACCESS_KEY,
      subject: `New message from ${formData.name}`,
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (result.success) {
        setResponseMessage('✅ Pesan Anda telah terkirim! Terima kasih.');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        setResponseMessage(`❌ Terjadi kesalahan: ${result.message}`);
      }
    } catch (error) {
      setResponseMessage('❌ Maaf, terjadi masalah dengan server. Coba lagi nanti.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-24  sm:py-32">
        {/* Background Gradient Effect */}
        <div className="absolute top-0 right-0 w-64 h-64 -translate-y-1/2 rounded-full bg-gradient-to-br from-purple-600 to-indigo-800 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 translate-y-1/2 rounded-full bg-gradient-to-br from-sky-500 to-cyan-600 opacity-20 blur-3xl"></div>

        <div className="container px-4 mx-auto">
            <div className="max-w-2xl mx-auto mb-16 text-center">
                <h2 className="text-4xl font-bold text-white md:text-5xl">Hubungi Saya</h2>
                <p className="mt-4 text-lg text-gray-400">
                    Punya proyek atau pertanyaan? Jangan ragu untuk mengirim pesan.
                </p>
            </div>
            
            <div className="max-w-5xl p-8 mx-auto rounded-2xl bg-slate-800/50 backdrop-blur-lg ring-1 ring-white/10">
                <div className="grid gap-16 lg:grid-cols-2">
                    {/* Kolom Kiri: Info & Visual */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-semibold text-white">Informasi Kontak</h3>
                            <p className="mt-2 text-gray-400">Temukan saya di sini atau kirim email langsung.</p>
                            <ul className="mt-8 space-y-6">
                                <li className="flex items-center">
                                    <FiMail className="w-6 h-6 mr-4 text-sky-400"/>
                                    <span className="text-gray-300">admin@yohancloud.biz.id</span>
                                </li>
                                <li className="flex items-center">
                                    <FiPhone className="w-6 h-6 mr-4 text-sky-400"/>
                                    <span className="text-gray-300">+62 819 7733 0481</span>
                                </li>
                                <li className="flex items-center">
                                    <FiMapPin className="w-6 h-6 mr-4 text-sky-400"/>
                                    <span className="text-gray-300">Kabuh - Jombang, Jawa Timur, Indonesia</span>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-8 flex items-center gap-3 text-white text-sm">
                             <img src="https://avatars.githubusercontent.com/u/111877508?v=4" alt="Contact Illustration" className="opacity-80 w-5 rounded-full"/>
                             <p>Yohanes Oktanio</p>
                        </div>
                    </div>

                    {/* Kolom Kanan: Formulir */}
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-8">
                            {/* Input dengan Floating Label */}
                            <div className="relative">
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="block w-full px-0 py-2 text-white bg-transparent border-0 border-b-2 appearance-none border-slate-600 focus:outline-none focus:ring-0 focus:border-sky-400 peer"/>
                                <label htmlFor="name" className="absolute text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nama Lengkap</label>
                            </div>
                            <div className="relative">
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="block w-full px-0 py-2 text-white bg-transparent border-0 border-b-2 appearance-none border-slate-600 focus:outline-none focus:ring-0 focus:border-sky-400 peer"/>
                                <label htmlFor="email" className="absolute text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Alamat Email</label>
                            </div>
                            <div className="relative">
                                <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleInputChange} required className="block w-full px-0 py-2 text-white bg-transparent border-0 border-b-2 appearance-none border-slate-600 focus:outline-none focus:ring-0 focus:border-sky-400 peer"></textarea>
                                <label htmlFor="message" className="absolute text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pesan Anda</label>
                            </div>
                        </div>
                        
                        <button 
                            type="submit" 
                            disabled={isSending}
                            className="w-full px-6 py-3 mt-12 text-lg font-semibold text-white transition-all duration-300 rounded-lg bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-sky-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSending ? 'Mengirim...' : 'Kirim Pesan'}
                        </button>

                        {responseMessage && (
                            <p className="mt-4 text-center">{responseMessage}</p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Contact;