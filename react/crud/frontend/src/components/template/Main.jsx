import React from 'react'
import './Main.css'

import Header from './Header'

export default props =>
    <React.Fragment>
        <Header {...props} /> {/* ...props aqui significa que as propriedades que eu recebi no Main estão sendo propagadas para o Header */}
            <main className="content container-fluid">
                <div className="p-3 mt-3">
                    {props.children}
                </div>
            </main>
    </React.Fragment>