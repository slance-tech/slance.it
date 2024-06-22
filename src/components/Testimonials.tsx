import Image from 'next/image'

import { Container } from '@/components/Container'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'

const testimonials = [
  [
    {
      content:
        `
        Convenient and intuitive app, perfect for personal trainers! Exercise search is simple and fast,
        and the ability to add multiple exercises simultaneously makes creating workout plans very efficient.
        I can also now modify sets, reps, and recovery without removing the exercise. Great job!
        `,
      author: {
        name: 'Federico B.',
        role: 'Personal Trainer',
      },
    },
    {
      content:
        `
        Finally, an app that understands the needs of personal trainers! I can duplicate existing workout plans,
        create custom plans, and add proprietary videos or links. The global view of assigned exercises is
        fantastic and makes planning much easier. Highly recommended for all PTs!
        `,
      author: {
        name: 'Gianluca S.',
        role: 'Fitness Coach',
      },
    }
  ],
  [
    {
      content:
        `
        An incredible app for managing workout plans. The new exercise search function is very practical,
        and the ability to add multiple exercises at once saves me a lot of time.
        The student management section with Live Activities and checks is exactly what I needed.
        `,
      author: {
        name: 'Luca T.',
        role: 'Health & Wellness Coach',
      },
    },
    {
      content:
        `
        Intuitive and highly functional app for personal trainers. The ability to quickly modify workout plans,
        add RPE, and have a global view of the program makes it an essential tool.
        Additionally, the user feedback feature with notes on individual exercises is very useful. Really satisfied!
        `,
      author: {
        name: 'Matteo P.',
        role: 'Yoga Instructor',
      },
    }
  ],
  [
    {
      content:
        `
        This app has everything a personal trainer needs. Creating custom workout plans is now a breeze,
        thanks to the ability to duplicate plans and add multiple exercises with just a few clicks.
        Student management has significantly improved with the addition of the check section and the ability
        to track them in real-time. Great job, indispensable app!
        `,
      author: {
        name: 'Alessandro R.',
        role: 'Strength Coach',
      },
    },
    {
      content:
        `
        Using Slance has streamlined my business operations. It’s the perfect tool for any
        personal trainer looking to enhance their workflow.
        `,
      author: {
        name: 'Isabella G.',
        role: 'Pilates Instructor',
      },
    }
  ],
]

function QuoteIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Trainers are already falling in love with Slance
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Our platform attracts personal trainers that want the confort of a software to manage their business,
            without becoming slaves of complicated and pricey solutions. For them, Slance is the answer they’ve been waiting for!
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute left-6 top-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
