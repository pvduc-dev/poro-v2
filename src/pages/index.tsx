import * as React from "react"
import {FC} from 'react'
import Card from "../components/molecules/Card";
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { Helmet } from 'react-helmet'

const IndexPage: FC = () => {
  return (
    <>
      <Helmet
        bodyAttributes={{
          className: 'dark'
        }}
      />
      <main>
        <ThemeToggler>
          {({ theme, toggleTheme }) => {
            if (theme == null) return null
            console.log(theme)
            return(
              <label>
                <input
                  type="checkbox"
                  onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                  checked={theme === 'dark'}
                />{' '}
                <span></span>
              </label>
            )}
          }
        </ThemeToggler>
        <div>
          <div className="container">
            <p
              className="text-center text-3xl font-bold text-[#5A6DFF]"
            >
              Skill
            </p>
            <div
              className="flex flex-wrap md:-mx-6 mt-6"
            >
              <div className="w-full lg:w-1/3 p-3 lg:p-4 xl:p-6 xl:p-8">
                <Card/>
              </div>
              <div className="w-full lg:w-1/3 p-3 lg:p-4 xl:p-6 xl:p-8">
                <Card/>
              </div>
              <div className="w-full lg:w-1/3 p-3 lg:p-4 xl:p-6 xl:p-8">
                <Card/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default IndexPage
