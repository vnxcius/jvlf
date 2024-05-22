const ViniAbout = () => {
  return (
    <>
      <section>
        <h3 className='text-center text-lg text-neutral-800 font-semibold mb-2'>Stack</h3>
        <div className='flex justify-center gap-4 items-center'>
          <img className='size-9' alt='golang icon' draggable='false'
            src='/icons/go.svg' />
          <img className='size-7' alt='react icon' draggable='false'
            src='/icons/react.svg' />
          <img className='size-7' alt='tailwind icon' draggable='false'
            src='/icons/tailwind.svg' />
          <img className='size-7' alt='typescript logo' draggable='false'
            src='/icons/typescript.svg' />
          <img className='size-7' alt='php icon' draggable='false'
            src='/icons/php.svg' />
          <img className='size-7' alt='docker icon' draggable='false'
            src='/icons/docker.svg' />
          <img className='size-7' alt='laravel icon' draggable='false'
            src='/icons/laravel.svg' />
          <img className='size-7' alt='postgresql icon' draggable='false'
            src='/icons/postgresql.svg' />
          <img className='size-7' alt='mysql icon' draggable='false'
            src='/icons/mysql.svg' />
        </div>
      </section>


      <section className='px-5'>
        <p className='text-neutral-700 '>
          Sou dev full-stack freelancer e um grande fã de Zelda.
          Estou a procura de oportunidades para aprimorar minhas skills como desenvolvedor.
        </p>

        <h3 className='text-neutral-800 font-semibold mt-4 mb-2'>Alguns dos projetos que já trabalhei:</h3>
        <ul className='list-disc px-5'>
          <li>
            <a href='https://medellincompany.com.br' className='flex items-center gap-1 text-violet-600 w-fit hover:underline underline-offset-2'>
              Medellin Original Company{''}
              <img className='size-3' alt=''
                src='https://upload.wikimedia.org/wikipedia/commons/6/6a/External_link_font_awesome.svg' />
            </a>
          </li>
          <li>
            <a href='https://jvlf.site' className='flex items-center gap-1 text-violet-600 w-fit hover:underline underline-offset-2'>
              jvlf.site{''}
              <img className='size-3' alt=''
                src='https://upload.wikimedia.org/wikipedia/commons/6/6a/External_link_font_awesome.svg' />
            </a>
          </li>
        </ul>
        <p className='text-neutral-700 my-5 flex items-center gap-1'>
          Conheça meu website portfólio: <a href='https://vinisimon.dev' target='_blank'
            className='flex items-center gap-1 text-violet-600 w-fit hover:underline underline-offset-2'>vinisimon.dev</a>
          <img className='size-3' alt=''
            src='https://upload.wikimedia.org/wikipedia/commons/6/6a/External_link_font_awesome.svg' />
        </p>
      </section>
    </>
  )
}

export default ViniAbout