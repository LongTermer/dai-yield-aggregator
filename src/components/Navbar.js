import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <span
          className="navbar-brand col-sm-3 col-md-2 mr-0 mx-3"
          style={{
            fontWeight: 'bold',
            fontSize: '2rem',
            padding: '10px',
          }}
        >
          YieldAggregator
        </span>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}
            >
              <span
                style={{
                  color: '#ffffff',
                  fontWeight: 'bold',
                  fontSize: '1.25rem',
                }}
              >
                Active Account:{' '}
              </span>
              <a
                className="nav-link small mx-3"
                href={`https://etherscan.io/address/${this.props.account}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '1.125rem',
                }}
              >
                {this.props.account.slice(0, 5) +
                  '...' +
                  this.props.account.slice(
                    this.props.account.length - 4,
                    this.props.account.length,
                  )}
              </a>
            </div>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar
