import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa6';

const Contact = () => {
  const WHATSAPP_NUMBER = "6281977330481"; 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, email, message } = formData;

    const waMessage = `Halo, perkenalkan saya ${name}.
Email: ${email}

Pesan:
${message}
`;

    const encodedMessage = encodeURIComponent(waMessage);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(url, '_blank', 'noopener,noreferrer');
    
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 ">
      <div className="absolute top-0 right-0 w-64 h-64 -translate-y-1/2 rounded-full bg-gradient-to-br from-purple-600 to-indigo-800 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 translate-y-1/2 rounded-full bg-gradient-to-br from-sky-500 to-cyan-600 opacity-20 blur-3xl"></div>

      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl">Hubungi Saya</h2>
          <p className="mt-4 text-lg text-gray-400">
            Punya proyek atau pertanyaan? Kirim pesan langsung ke WhatsApp saya.
          </p>
        </div>
        
        <div className="max-w-5xl p-8 mx-auto rounded-2xl bg-slate-800/50 backdrop-blur-lg ring-1 ring-white/10">
          <div className="grid gap-16 lg:grid-cols-2">
            
            <div className="flex flex-col justify-center">
              <div>
                <h3 className="text-2xl font-semibold text-white">Kirim Pesan Langsung</h3>
                <p className="mt-2 text-gray-400">Isi formulir di samping. Pesan Anda akan langsung terkirim ke WhatsApp saya.</p>
              </div>
              <div className="flex items-center p-4 mt-8 rounded-lg bg-emerald-900/50 ring-1 ring-emerald-500/30">
                <FaWhatsapp className="w-10 h-10 mr-4 text-emerald-400" />
                <div>
                  <p className="font-semibold text-white">Tersedia di WhatsApp</p>
                  <p className="text-gray-300">+{WHATSAPP_NUMBER}</p>
                </div>
              </div>
               <div className="mt-auto pt-8 flex items-center gap-3 text-white text-sm">
                  <img src="https://avatars.githubusercontent.com/u/111877508?v=4" alt="Yohanes Oktanio" className="opacity-80 w-8 h-8 rounded-full"/>
                  <p>Yohanes Oktanio</p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="space-y-8">
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
                className="flex items-center justify-center w-full px-6 py-3 mt-12 text-lg font-semibold text-white transition-all duration-300 rounded-lg bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-emerald-500"
              >
                Kirim via WhatsApp
                <FaWhatsapp className="w-5 h-5 ml-3" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;