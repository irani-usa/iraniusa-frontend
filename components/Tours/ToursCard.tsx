
const ToursCard = () => {
    return (
        <div className="relative top-0 left-0 w-full border-white-shade-4 border rounded-2xl hover:shadow-card transition-all duration-300 hover:z-50 hover:-top-5 hover:cursor-pointer">
            <div className="w-full h-72 bg-cover rounded-t-2xl" style={{ backgroundImage: `url('/images/tours/1.jpg')` }}></div>
            <h4 className="text-black font-outfit font-bold mx-4 mt-6 mb-12 text-xl">
                The Geo-Archaeo Face of USA
            </h4>
            <p className="text-white-shade-11 font-opensans m-4 text-lg">
                The Most Spectacular Geological and Archaeological Sites of Iran Gate of Nations is
            </p>
            <div className="grid grid-cols-2 grid-row-2 gap-y-3 font-opensans mx-4 mt-12 mb-6">
                <div className="flex items-center font-semibold gap-x-2">
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 5.39535C9.24778 5.39535 5.39535 9.24778 5.39535 14C5.39535 18.7522 9.24778 22.6047 14 22.6047C18.7522 22.6047 22.6047 18.7522 22.6047 14C22.6047 9.24778 18.7522 5.39535 14 5.39535ZM4 14C4 8.47715 8.47715 4 14 4C19.5228 4 24 8.47715 24 14C24 19.5228 19.5228 24 14 24C8.47715 24 4 19.5228 4 14ZM14 7.72093C14.3853 7.72093 14.6977 8.03329 14.6977 8.4186V8.71324C16.2144 8.98481 17.4884 10.1243 17.4884 11.6744C17.4884 12.0597 17.176 12.3721 16.7907 12.3721C16.4054 12.3721 16.093 12.0597 16.093 11.6744C16.093 11.0433 15.5683 10.3752 14.6977 10.1372V13.3644C16.2144 13.636 17.4884 14.7755 17.4884 16.3256C17.4884 17.8757 16.2144 19.0152 14.6977 19.2868V19.5814C14.6977 19.9667 14.3853 20.2791 14 20.2791C13.6147 20.2791 13.3023 19.9667 13.3023 19.5814V19.2868C11.7856 19.0152 10.5116 17.8757 10.5116 16.3256C10.5116 15.9403 10.824 15.6279 11.2093 15.6279C11.5946 15.6279 11.907 15.9403 11.907 16.3256C11.907 16.9567 12.4317 17.6248 13.3023 17.8628V14.6356C11.7856 14.364 10.5116 13.2245 10.5116 11.6744C10.5116 10.1243 11.7856 8.98481 13.3023 8.71324V8.4186C13.3023 8.03329 13.6147 7.72093 14 7.72093ZM13.3023 10.1372C12.4317 10.3752 11.907 11.0433 11.907 11.6744C11.907 12.3055 12.4317 12.9736 13.3023 13.2116V10.1372ZM14.6977 14.7884V17.8628C15.5683 17.6248 16.093 16.9567 16.093 16.3256C16.093 15.6945 15.5683 15.0264 14.6977 14.7884Z" fill="#B3B3B3" />
                    </svg>
                    <span className="text-white-shade-10"><span className="text-black">$199</span> starting</span>
                </div>
                <div className="flex items-center font-semibold gap-x-2">
                    <svg width="95" height="17" viewBox="0 0 95 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0.5L10.116 5.58754L15.6085 6.02786L11.4238 9.61246L12.7023 14.9721L8 12.1L3.29772 14.9721L4.5762 9.61246L0.391548 6.02786L5.88397 5.58754L8 0.5Z" fill="#F1C644" />
                        <path d="M27.5729 0.5L29.689 5.58754L35.1814 6.02786L30.9967 9.61246L32.2752 14.9721L27.5729 12.1L22.8707 14.9721L24.1491 9.61246L19.9645 6.02786L25.4569 5.58754L27.5729 0.5Z" fill="#F1C644" />
                        <path d="M47.1458 0.5L49.2618 5.58754L54.7543 6.02786L50.5696 9.61246L51.8481 14.9721L47.1458 12.1L42.4435 14.9721L43.722 9.61246L39.5374 6.02786L45.0298 5.58754L47.1458 0.5Z" fill="#F1C644" />
                        <path d="M66.7188 0.5L68.8348 5.58754L74.3272 6.02786L70.1426 9.61246L71.421 14.9721L66.7188 12.1L62.0165 14.9721L63.2949 9.61246L59.1103 6.02786L64.6027 5.58754L66.7188 0.5Z" fill="#F1C644" />
                        <path d="M86.2917 1.66297L87.9953 5.75905L88.1001 6.01093L88.372 6.03272L92.7941 6.38724L89.4249 9.27328L89.2178 9.45074L89.2811 9.71609L90.3104 14.0313L86.5245 11.7189L86.2917 11.5767L86.0589 11.7189L82.273 14.0313L83.3023 9.71609L83.3656 9.45074L83.1584 9.27328L79.7893 6.38724L84.2114 6.03272L84.4833 6.01093L84.588 5.75905L86.2917 1.66297Z" stroke="#F1C644" stroke-width="0.893229" />
                    </svg>
                    <span className="text-black">
                        4.2
                    </span>
                </div>
                <div className="flex items-center font-semibold gap-x-2">
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12.329C6 8.28129 9.13401 5 13 5C16.866 5 20 8.28129 20 12.329C20 16.3449 17.7658 21.0312 14.2801 22.707C13.4675 23.0977 12.5325 23.0977 11.7199 22.707C8.23416 21.0312 6 16.3449 6 12.329Z" stroke="#B3B3B3" stroke-width="1.33984" />
                        <path d="M11 12H16" stroke="#B3B3B3" stroke-width="1.33984" stroke-linecap="round" />
                    </svg>
                    <span className="text-black">
                        Tehran
                    </span>
                </div>
                <div className="flex items-center font-semibold gap-x-2">
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 5.39535C9.24778 5.39535 5.39535 9.24778 5.39535 14C5.39535 18.7522 9.24778 22.6047 14 22.6047C18.7522 22.6047 22.6047 18.7522 22.6047 14C22.6047 9.24778 18.7522 5.39535 14 5.39535ZM4 14C4 8.47715 8.47715 4 14 4C19.5228 4 24 8.47715 24 14C24 19.5228 19.5228 24 14 24C8.47715 24 4 19.5228 4 14ZM14 9.5814C14.3853 9.5814 14.6977 9.89375 14.6977 10.2791V13.711L16.8189 15.8323C17.0914 16.1047 17.0914 16.5465 16.8189 16.8189C16.5465 17.0914 16.1047 17.0914 15.8323 16.8189L13.5067 14.4933C13.3758 14.3625 13.3023 14.185 13.3023 14V10.2791C13.3023 9.89375 13.6147 9.5814 14 9.5814Z" fill="#B3B3B3" />
                    </svg>
                    <span className="text-black">
                        15 days
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ToursCard