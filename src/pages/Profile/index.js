import React from 'react'
import { Link } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

import './style.css'

export default function Profile(){
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem Vinda, APAD</span>

                <Link to="/incidents/new" className="button">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO</strong>
                    {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti explicabo culpa eos molestiae doloremque quis asperiores quos iusto officia laboriosam dolorum, impedit voluptates, magnam vel tempora facere ipsa et quo.</p> */}
                    <p>Descrição do caso</p>

                    <strong>VALOR</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO</strong>
                    {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti explicabo culpa eos molestiae doloremque quis asperiores quos iusto officia laboriosam dolorum, impedit voluptates, magnam vel tempora facere ipsa et quo.</p> */}
                    <p>Descrição do caso</p>

                    <strong>VALOR</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO</strong>
                    {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti explicabo culpa eos molestiae doloremque quis asperiores quos iusto officia laboriosam dolorum, impedit voluptates, magnam vel tempora facere ipsa et quo.</p> */}
                    <p>Descrição do caso</p>

                    <strong>VALOR</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>
        </div>
    )
}