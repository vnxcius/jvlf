const JessAbout = () => {
  return (
    <>
      <section>
        <h3 className='text-center text-lg text-neutral-800 font-semibold mb-2'>Conhecimento</h3>
        <div className='flex justify-center gap-4 items-center'>
        <img className='size-10' alt='golang icon' draggable='false'
            src='/icons/itil.svg' />
          <img className='size-20 object-contain' alt='cobit icon' draggable='false' title="Cobit 2019"
            src='/icons/cobit.webp' />
          <img className='size-10' alt='pmi icon' draggable='false' title="PMI"
            src='/icons/pmi.png' />
          <img className='size-14' alt='iso 38500 logo' draggable='false' title="ISO 38500" 
            src='/icons/iso_38500.png' />
          <img className='size-12' alt='iso 20000 icon' draggable='false' title="ISO 20000"
            src='/icons/iso_20000.png' />
        </div>
      </section>


      <section className='px-5 py-4 text-neutral-700 space-y-2'>
        <p>
          Sou fã de tecnologias, esporte, educação e gestão.
        </p>
        <p>
          Uma grande entusiasta na obtenção de conhecimento, pois sou
          licenciada em Ed. Física - UnB, técnica em Serviço Público - IFB
          e quase tecnóloga em Gestão da Tecnologia da Informação - Senac DF.
        </p>
        <p>
          Na área de GTI me identifiquei muito com gestão, projetos e governança.

        </p>
      </section>
    </>
  )
}

export default JessAbout