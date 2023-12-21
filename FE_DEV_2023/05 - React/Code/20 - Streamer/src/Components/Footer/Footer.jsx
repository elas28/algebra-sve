import Streamer from '../../Images/Logo/streamer.svg';

export default function Footer() {
    return (
        <footer className='footer'>
            <img src={Streamer} className='logo' alt='Stream+' />
            <ul className='social-media'>
                <li>
                    <a href='https://www.facebook.com'>
                        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' className='bi bi-facebook' viewBox='0 0 16 16'>
                            <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951' />
                        </svg>
                    </a>
                </li>
                <li>
                    <a href='https://www.x.com'>
                        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' className='bi bi-twitter-x' viewBox='0 0 16 16'>
                            <path d='M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z' />
                        </svg>
                    </a>
                </li>
                <li>
                    <a href='https://www.youtube.com'>
                        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' className='bi bi-youtube' viewBox='0 0 16 16'>
                            <path d='M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z' />
                        </svg>
                    </a>
                </li>
            </ul>
            <span>&copy; {new Date().getFullYear()} ACME, Inc. All Rights Reserved. Stream+<sup>&reg;</sup> is a trademark of ACME, Inc.</span>
            <p className='disclaimer'>* Stream+ will not be launching in Albania, Andorra, Bulgaria, Bosnia, Croatia, Czech Republic, Denmark, Finland, Hungary, Kosovo, Macedonia, Montenegro, Netherlands, Norway, Poland, Portugal, Romania, Serbia, Spain, Slovakia, Slovenia or Sweden. We use essential cookies to make our site work. With your consent, we may also use non-essential cookies to improve user experience and analyse website traffic. The information provided on Stream+ is for general informational purposes only. While we strive to ensure the accuracy of the content, we make no representations or warranties about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics on the website. Your reliance on any information is at your own risk. Stream+ is not liable for any loss or damage, including indirect or consequential loss or damage, arising from the use of our website. We have no control over external websites linked through Stream+ and do not endorse their content. We make every effort to keep Stream+ running smoothly but take no responsibility for temporary unavailability due to technical issues beyond our control. This disclaimer is subject to change without notice and was last updated on May 5th, 2023.</p>
        </footer>
    )
}