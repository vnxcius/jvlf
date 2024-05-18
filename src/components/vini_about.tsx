const ViniAbout = () => {
  return (
    <>
      <section>
        <h3 className='text-center text-lg text-neutral-800 font-semibold mb-2'>Stack</h3>
        <div className='flex justify-center gap-4 items-center'>
          <img className='size-9' alt='golang icon' draggable='false'
            src='https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg' />
          <img className='size-7' alt='react icon' draggable='false'
            src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' />
          <img className='size-7' alt='tailwind icon' draggable='false'
            src='https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' />
          <img className='size-6' alt='typescript logo' draggable='false'
            src='https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' />
          <img className='w-10 h-5' alt='php icon' draggable='false'
            src='https://cdn.worldvectorlogo.com/logos/php-1.svg' />
          <img className='size-7 object-contain' alt='docker icon' draggable='false'
            src='https://www.docker.com/wp-content/uploads/2023/05/symbol_blue-docker-logo.png' />
          <img className='size-7' alt='laravel icon' draggable='false'
            src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg' />
          <img className='size-7' alt='postgresql icon' draggable='false'
            src='https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg' />
          <img className='size-10' alt='postgresql icon' draggable='false'
            src='https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg' />
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