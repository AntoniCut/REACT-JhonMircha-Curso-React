//  *************************************************************************
//  **********  /01-react-basicos-cra/src/components/Header.jsx  ************
//  *************************************************************************


import reactLogo from '../../logo.svg';



export const Header = () => {

    return (

        <header className="header__container">

            <a href="https://react.dev" target="_blank" withouth rel="noreferrer">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>

            <h1 className='header__title'> REACT Básicos - CRA - Jhon Mircha </h1>

            <a href="https://react.dev" target="_blank" withouth rel="noreferrer">
                <img src={reactLogo} className="logo react" alt="React logo"  />
            </a>

        </header>
    )
}