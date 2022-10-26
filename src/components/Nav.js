import React from 'react';
import { NavLink } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
import Logo from './../assets/logos/logo.svg';


export default function Nav(){
//     const { pathname } = useLocation();
//    if (pathname !== '/'){
//     //    let home = document.getElementById('home')
//        const isActive = false
//     }

    return(
        <>
            <nav className='-translate-x-[150%] landscape:overflow-y-auto shadow-sm shadow-slate-500 md:shadow-none  md:translate-x-0 transition-transform duration-1000 flex z-50 flex-col md:gap-5 bg-dark-blue h-screen fixed w-9/12 md:w-24 md:items-center pb-10 pl-3 md:pl-0 pt-[20%] md:pt-[72px]'>
                <NavLink exact to='/' className="fixed top-7 hidden md:block">
                    <img src={Logo} alt='logo' className='w-[30px] h-[30px]' />
                </NavLink>
                <div className='space-y-10 px-[15px] py-5 rounded-[32px] md:bg-dark-blue-alt flex flex-col'>
                    <NavLink exact activeClassName to='/' end={true} id='home'  className={({ isActive }) => (isActive ? 'flex flex-row items-center gap-10 current-nav' : 'not-current-nav flex flex-row items-center gap-10 ')}>
                        <svg title="Home" className='cursor-pointer' width="30" height="30" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.38171 18.0503V15.239C6.3817 14.5266 6.96099 13.9478 7.67852 13.9433H10.3132C11.0339 13.9433 11.6182 14.5234 11.6182 15.239V18.0421C11.6182 18.66 12.1203 19.1622 12.7427 19.1667H14.5401C15.3796 19.1688 16.1855 18.8392 16.7799 18.2507C17.3742 17.6621 17.7083 16.8629 17.7083 16.0294V8.0437C17.7083 7.37045 17.4077 6.73183 16.8875 6.29989L10.781 1.45142C9.7136 0.603372 8.18905 0.630768 7.15323 1.51661L1.17805 6.29989C0.633305 6.7191 0.307716 7.35961 0.291626 8.0437V16.0213C0.291626 17.7584 1.71006 19.1667 3.45978 19.1667H5.21623C5.51587 19.1688 5.80399 19.0522 6.01664 18.8426C6.2293 18.633 6.34889 18.3478 6.34888 18.0503H6.38171Z" fill="#EFEEE0"/>
                        </svg>
                        <h1 className='block md:hidden text-white text-lg'>Home</h1>
                    </NavLink>
                    <NavLink  to='/collection' className={({ isActive }) => (isActive ? 'flex flex-row items-center gap-10 current-nav' : 'not-current-nav flex flex-row items-center gap-10 ')} >
                        <svg title='My collections' className='cursor-pointer' width="30" height="30" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5833 4.35416H14.6666V2.98832C14.6666 2.22749 14.0433 1.60416 13.2825 1.60416H8.71748C7.95665 1.60416 7.33331 2.22749 7.33331 2.98832V4.35416H6.41665C5.40831 4.35416 4.58331 5.17916 4.58331 6.18749V6.30666C4.87665 6.22416 5.17915 6.18749 5.49998 6.18749H16.5C16.8208 6.18749 17.1233 6.22416 17.4166 6.30666V6.18749C17.4166 5.17916 16.5916 4.35416 15.5833 4.35416Z" fill="#EFEEE0" fill-opacity="0.25"/>
                            <path d="M12.7691 15.5192C12.4758 15.5192 12.2466 15.7575 12.2466 16.0417C12.2466 16.3258 12.485 16.5642 12.7691 16.5642C13.0533 16.5642 13.2916 16.3258 13.2916 16.0417C13.2916 15.7575 13.0533 15.5192 12.7691 15.5192Z" fill="#EFEEE0" fill-opacity="0.25"/>
                            <path d="M8.31419 16.3258C8.02085 16.3258 7.79169 16.5642 7.79169 16.8483C7.79169 17.1325 8.03002 17.3708 8.31419 17.3708C8.59835 17.3708 8.83669 17.1325 8.83669 16.8483C8.83669 16.5642 8.60752 16.3258 8.31419 16.3258Z" fill="#EFEEE0" fill-opacity="0.25"/>
                            <path d="M17.4166 7.68167C17.1233 7.59917 16.8208 7.5625 16.5 7.5625H5.49998C5.17915 7.5625 4.87665 7.59917 4.58331 7.68167C3.00665 8.09417 1.83331 9.53333 1.83331 11.2292V16.7292C1.83331 18.7458 3.48331 20.3958 5.49998 20.3958H16.5C18.5166 20.3958 20.1666 18.7458 20.1666 16.7292V11.2292C20.1666 9.53333 18.9933 8.09417 17.4166 7.68167ZM14.6666 12.1733V16.0417C14.6666 17.0867 13.8141 17.9392 12.7691 17.9392C11.7241 17.9392 10.8716 17.0867 10.8716 16.0417C10.8716 14.9967 11.7241 14.1442 12.7691 14.1442C12.9525 14.1442 13.1266 14.1808 13.2916 14.2267V13.0717L10.2208 13.9058V16.8483C10.2208 16.8575 10.2208 16.8667 10.2116 16.8758C10.2025 17.9117 9.34998 18.755 8.31415 18.755C7.26915 18.755 6.41665 17.9025 6.41665 16.8483C6.41665 15.7942 7.26915 14.9508 8.31415 14.9508C8.49748 14.9508 8.67165 14.9875 8.84581 15.0333V13.3833V11.9625C8.84581 11.1742 9.34081 10.5325 10.0925 10.3308L12.5216 9.66167C13.3008 9.45083 13.7958 9.6525 14.0708 9.86333C14.3458 10.0742 14.6666 10.4867 14.6666 11.3025V12.1733Z" fill="#EFEEE0" fill-opacity="0.25"/>
                        </svg>

                        <h1 className='block md:hidden text-white text-lg'>My collections</h1>
                    </NavLink>
                    <NavLink to='/radio' className={({ isActive }) => (isActive ? 'flex flex-row items-center gap-10 current-nav' : 'not-current-nav flex flex-row items-center gap-10 ')}>
                        <svg width="30" height="30" className='cursor-pointer' title="Radio" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.10413 1.83333V4.58333H6.41663C6.17829 4.58333 5.94913 4.5925 5.72913 4.62916V1.83333C5.72913 1.45749 6.04079 1.14583 6.41663 1.14583C6.79246 1.14583 7.10413 1.45749 7.10413 1.83333Z" fill="#EFEEE0" fill-opacity="0.25"/>
                            <path d="M15.5834 4.58333H6.41671C6.17837 4.58333 5.94921 4.5925 5.72921 4.62916C3.36421 4.90416 1.83337 6.65499 1.83337 9.16666V15.5833C1.83337 18.3333 3.66671 20.1667 6.41671 20.1667H15.5834C18.3334 20.1667 20.1667 18.3333 20.1667 15.5833V9.16666C20.1667 6.41666 18.3334 4.58333 15.5834 4.58333ZM7.22337 14.6667C5.95837 14.6667 4.93171 13.64 4.93171 12.375C4.93171 11.11 5.95837 10.0833 7.22337 10.0833C8.48837 10.0833 9.51504 11.11 9.51504 12.375C9.51504 13.64 8.48837 14.6667 7.22337 14.6667ZM13.1817 14.8958H12.7234C12.3475 14.8958 12.0359 14.5842 12.0359 14.2083C12.0359 13.8325 12.3475 13.5208 12.7234 13.5208H13.1817C13.5575 13.5208 13.8692 13.8325 13.8692 14.2083C13.8692 14.5842 13.5575 14.8958 13.1817 14.8958ZM16.39 14.8958H15.9317C15.5559 14.8958 15.2442 14.5842 15.2442 14.2083C15.2442 13.8325 15.5559 13.5208 15.9317 13.5208H16.39C16.7659 13.5208 17.0775 13.8325 17.0775 14.2083C17.0775 14.5842 16.7659 14.8958 16.39 14.8958ZM16.39 11.2292H12.7234C12.3475 11.2292 12.0359 10.9175 12.0359 10.5417C12.0359 10.1658 12.3475 9.85416 12.7234 9.85416H16.39C16.7659 9.85416 17.0775 10.1658 17.0775 10.5417C17.0775 10.9175 16.7659 11.2292 16.39 11.2292Z" fill="#EFEEE0" fill-opacity="0.25"/>
                        </svg>
                        <h1 className='block md:hidden text-white text-lg'>Radio</h1>
                    </NavLink>
                    <NavLink to='/music-videos' className={({ isActive }) => (isActive ? 'flex flex-row items-center gap-10 current-nav' : 'not-current-nav flex flex-row items-center gap-10 ')}>
                        <svg width="30" height="30" title='Music videos' className='cursorPointer' viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.3125 7.205H1.83337V14.8408C1.83337 14.8958 1.83337 14.9508 1.84254 14.9967H10.3125V7.205Z" fill="#EFEEE0" fill-opacity="0.25"/>
                            <path d="M7.04919 5.83H10.3125V1.83333H7.07669V5.71999C7.07669 5.75666 7.05836 5.79333 7.04919 5.83Z" fill="#EFEEE0" fill-opacity="0.25"/>
                            <path d="M5.70168 5.72V1.98C3.66668 2.40166 2.33751 3.75833 1.95251 5.83H5.72001C5.71085 5.79333 5.70168 5.75666 5.70168 5.72Z" fill="#EFEEE0" fill-opacity="0.25"/>
                            <path d="M14.8683 1.83333H11.6875V5.83H14.8683V1.83333Z" fill="#EFEEE0" fill-opacity="0.25"/>
                            <path d="M16.2341 5.83001H20.0475C19.6625 3.74001 18.315 2.37417 16.2433 1.97084V5.80251C16.2433 5.81167 16.2341 5.82084 16.2341 5.83001Z" fill="#EFEEE0" fill-opacity="0.25"/>
                            <path d="M16.2433 20.0292C18.2508 19.635 19.5708 18.3517 20.0016 16.3717H16.2433V20.0292Z" fill="#EFEEE0" fill-opacity="0.25"/>
                            <path d="M14.8683 16.3717H11.6875V20.1667H14.8683V16.3717Z" fill="#EFEEE0" fill-opacity="0.25"/>
                            <path d="M11.6875 14.9967H20.1575C20.1667 14.9508 20.1667 14.8958 20.1667 14.8408V7.205H11.6875V14.9967Z" fill="#EFEEE0" fill-opacity="0.25"/>
                            <path d="M10.3125 16.3717H7.07666V20.1667H10.3125V16.3717Z" fill="#EFEEE0" fill-opacity="0.25"/>
                            <path d="M1.99829 16.3717C2.42912 18.3333 3.73079 19.6167 5.70162 20.02V16.3717H1.99829Z" fill="#EFEEE0" fill-opacity="0.25"/>
                        </svg>
                        <h1 className='block md:hidden text-white text-lg'>Music videos</h1>
                    </NavLink>
                </div>
                <div className='space-y-10 px-[15px] py-[20px] rounded-[32px] md:bg-dark-blue-alt flex flex-col'>
                    <NavLink to='/account' className={({ isActive }) => (isActive ? 'flex flex-row items-center gap-10 current-nav' : 'not-current-nav flex flex-row items-center gap-10 ')}>
                        <svg title="Profile" className='cursor-pointer' width="30" height="30" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 1.83333C8.59837 1.83333 6.64587 3.78583 6.64587 6.18749C6.64587 8.54333 8.48837 10.45 10.89 10.5325C10.9634 10.5233 11.0367 10.5233 11.0917 10.5325C11.11 10.5325 11.1192 10.5325 11.1375 10.5325C11.1467 10.5325 11.1467 10.5325 11.1559 10.5325C13.5025 10.45 15.345 8.54333 15.3542 6.18749C15.3542 3.78583 13.4017 1.83333 11 1.83333Z" fill="#EFEEE0"/>
                            <path d="M15.6566 12.9708C13.0991 11.2658 8.9283 11.2658 6.35246 12.9708C5.1883 13.75 4.54663 14.8042 4.54663 15.9317C4.54663 17.0592 5.1883 18.1042 6.3433 18.8742C7.62663 19.7358 9.3133 20.1667 11 20.1667C12.6866 20.1667 14.3733 19.7358 15.6566 18.8742C16.8116 18.095 17.4533 17.05 17.4533 15.9133C17.4441 14.7858 16.8116 13.7408 15.6566 12.9708Z" fill="#EFEEE0"/>
                        </svg>
                        <h1 className='block md:hidden text-white text-lg'>Profile</h1>
                    </NavLink>
                    <NavLink to='/logout' className={({ isActive }) => (isActive ? 'flex flex-row items-center gap-10 current-nav' : 'not-current-nav flex flex-row items-center gap-10 ')}>
                        <svg title='Log out' className='cursor-pointer' width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.53505 0.833336C11.8107 0.833336 13.6667 2.6575 13.6667 4.90334V9.29417H8.07078C7.66974 9.29417 7.35263 9.60584 7.35263 10C7.35263 10.385 7.66974 10.7058 8.07078 10.7058H13.6667V15.0875C13.6667 17.3333 11.8107 19.1667 9.51639 19.1667H4.97436C2.68936 19.1667 0.833374 17.3425 0.833374 15.0967V4.9125C0.833374 2.6575 2.69868 0.833336 4.98369 0.833336H9.53505ZM15.9952 6.83769C16.2702 6.55352 16.7194 6.55352 16.9944 6.82852L19.6711 9.49602C19.8086 9.63352 19.8819 9.80769 19.8819 10.0002C19.8819 10.1835 19.8086 10.3669 19.6711 10.4952L16.9944 13.1627C16.8569 13.3002 16.6736 13.3735 16.4994 13.3735C16.3161 13.3735 16.1327 13.3002 15.9952 13.1627C15.7202 12.8877 15.7202 12.4385 15.9952 12.1635L17.4619 10.706H13.6669V9.29435H17.4619L15.9952 7.83685C15.7202 7.56185 15.7202 7.11269 15.9952 6.83769Z" fill="#EFEEE0"/>
                        </svg>
                        <h1 className='block md:hidden text-white text-lg'>Log out</h1>
                    </NavLink>
                </div>
            </nav>
        </>
    )
}