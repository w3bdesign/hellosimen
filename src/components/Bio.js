import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Bio = () => {

  let [biography] = useState({
    Short: [
      {
        content: [
          '33, teacher and future fullstack developer, Oslo'
        ],
        tags: ['HTML', 'SCSS', 'JavaScript', 'PHP/MySQL'],
        tagsDetails: [],
      },
    ],
    Medium: [
      {
        content: [
          "I'm a 33 years old elementary school teacher located in Bjølsen, Oslo. On my free time I work hard to become a self-taught fullstack developer.", 
          "Among other projects, I've developed and is currently managing one of Norways largest educational portals for children, Lesekloden.no."
        ],
        tags: ['HTML', 'SCSS', 'JavaScript', 'PHP/MySQL'],
        tagsDetails: ['Bulma', 'Tailwind', 'Alpine', 'React', 'Laravel'],
      },
    ],
    Long: [
      {
        content: [
          "I'm a 33 years old elementary school teacher located in Bjølsen, Oslo. On my free time I work hard to become a self-taught fullstack developer.", 
          "Among other projects, I've developed and is currently managing one of Norways largest educational portals for children, Lesekloden.no",
          "My main focus is frontend, mobile-responsive and accesible web designs, and simple games.",
          "I've built multiple sites using BulmaCSS and TailwindCSS, and I'm currently learning React, AlpineJS, Laravel and Git.",
          "Outside of programming my past time interrests are board games and pen-and-paper roleplaying games."
        ],
        tags: ['HTML', 'SCSS', 'JavaScript', 'PHP/MySQL'],
        tagsDetails: ['Bulma', 'Tailwind', 'Alpine', 'React', 'Laravel'],
      },
    ],
  })

  /*
   *  Upcoming functionality: Modals with details.
   *
  
  const technologies = [
    {
      title: "HTML",
      content: "Level of proficiency: Proficient.",
      frameworks: [
        {
          experienced: [],
          some: []
        }
      ]
    }
  ]
  */

  return(
    <section>
      <div className="container px-5 pb-6 mx-auto pt-36">
      <Tab.Group>
        <Tab.List className="flex space-x-6">
          {Object.keys(biography).map((bio) => (
            <Tab
              key={bio}
              className={({ selected }) =>
                classNames(
                  'py-1 leading-5 font-medium text-zinc-700 text-sm',
                  'focus:outline-none',
                  selected
                    ? 'underline decoration-[#260388] decoration-wavy decoration-2 underline-offset-8 font-semibold dark:decoration-white'
                    : 'text-zinc-400 hover:text-zinc-900'
                )
              }
            >
              <div className="dark:text-zinc-300">
                {bio}
              </div>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-3">
          {Object.values(biography).map((bios, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'py-2',
                'focus:outline-none',
                'dark:text-zinc-300'
                
              )}
            >
              <div className="h-80">
                <ul>
                  {bios.map((bio, idx) => (
                    <li
                      key={idx}
                      className="relative py-1"
                    >
                      <div className="prose max-w-prose dark:text-zinc-400">
                          {bio.content.map((paragraph, idx) => (
                            <p key={idx}>
                              {paragraph}
                            </p>
                          ))}
                      </div>
                      <div className="mt-1 space-x-2">
                        {bio.tags.map((tag, idx) => (
                            <button
                              key={idx}
                              className="px-2 py-0.5 bg-zinc-200 text-zinc-700 rounded text-xs dark:bg-zinc-600 dark:text-zinc-400">
                              {tag}
                            </button>
                          ))}
                      </div>
                      <div className="mt-1 space-x-2">
                        {bio.tagsDetails.map((tag, idx) => (
                            <button
                              key={idx}
                              className="px-2 py-0.5 bg-zinc-50 text-zinc-500 rounded text-xs dark:bg-zinc-700 dark:text-zinc-500">
                              {tag}
                            </button>
                          ))}
                      </div>

                    </li>
                  ))}
                </ul>
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>

    </section>
  )
}

export default Bio