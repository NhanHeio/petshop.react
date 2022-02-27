import React from 'react'

const GoogleMap = () => {
  return (
    <div>
        <div>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15715.99413509235!2d105.75366487396361!3d10.016978785431386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a08834267f2d19%3A0xb08ca83b6ace2a75!2zSMawbmcgTOG7o2ksIE5pbmggS2nhu4F1LCBD4bqnbiBUaMahLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1644954476447!5m2!1svi!2s" 
          width={600} 
          height={450} 
          frameBorder={0} 
          style={{border:0}} 
          allowFullScreen
        ></iframe>
        </div>
    </div>
  )
}

export default GoogleMap