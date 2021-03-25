import store2 from 'store2';
import Link from 'next/link';
import Router from 'next/router';
import './style.scss';

const Header = () => {
  const userName = store2.session.get('username');
  const logOutHandler = (e) => {
    e.preventDefault();
    if (userName) {
      store2.session.clearAll();
      Router.replace('/');
    } else {
      Router.replace('/signin');
    }
  };

  return (
    <div className="Navbar_root__2kbI9">
      <div className="mx-auto max-w-8xl px-6">
        <div className="flex justify-between align-center flex-row py-4 md:py-6 :py-6 relative">
          <div className="flex flex-1 items-center">
            <Link href="/">
              <a className="Navbar_logo__26S5Y">
                <svg width="32" height="32" viewBox="0 0 257 257" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M67.5384 173.762L27.7728 161.49L31.4952 159.135L55.6622 156.201L67.5384 173.762Z" fill="#666666"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M218.084 108.798C218.084 158.359 178.087 198.534 128.746 198.534C79.407 198.534 39.4092 158.359 39.4092 108.798C39.4092 59.2387 79.407 19.0623 128.746 19.0623C178.087 19.0623 218.084 59.2387 218.084 108.798Z" fill="#ECB360"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M194.261 99.8245C194.261 144.428 159.594 180.587 116.835 180.587C74.0741 180.587 39.4092 144.428 39.4092 99.8245C39.4092 55.2211 74.0741 19.0623 116.835 19.0623C159.594 19.0623 194.261 55.2211 194.261 99.8245Z" fill="#D76835"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M200.216 90.8499C200.216 130.499 169.551 162.64 131.722 162.64C93.8976 162.64 63.2325 130.499 63.2325 90.8499C63.2325 51.2034 93.8976 19.0623 131.722 19.0623C169.551 19.0623 200.216 51.2034 200.216 90.8499Z" fill="#D33A41"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M194.26 96.8338C194.26 133.176 166.261 162.64 131.723 162.64C97.1853 162.64 69.188 133.176 69.188 96.8338C69.188 60.4883 97.1853 31.0266 131.723 31.0266C166.261 31.0266 194.26 60.4883 194.26 96.8338Z" fill="#B6CB46"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M188.304 102.815C188.304 135.855 161.639 162.64 128.745 162.64C95.8538 162.64 69.188 135.855 69.188 102.815C69.188 69.7752 95.8538 42.9921 128.745 42.9921C161.639 42.9921 188.304 69.7752 188.304 102.815Z" fill="#66AD4A"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M164.481 90.8512C164.481 117.283 143.149 138.711 116.834 138.711C90.5185 138.711 69.188 117.283 69.188 90.8512C69.188 64.4194 90.5185 42.9921 116.834 42.9921C143.149 42.9921 164.481 64.4194 164.481 90.8512Z" fill="#AED7DC"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M170.437 84.8688C170.437 107.996 151.772 126.746 128.746 126.746C105.719 126.746 87.0558 107.996 87.0558 84.8688C87.0558 61.74 105.719 42.9921 128.746 42.9921C151.772 42.9921 170.437 61.74 170.437 84.8688Z" fill="#5BB1CF"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M170.437 87.8586C170.437 109.335 154.439 126.745 134.702 126.745C114.966 126.745 98.9672 109.335 98.9672 87.8586C98.9672 66.3847 114.966 48.9741 134.702 48.9741C154.439 48.9741 170.437 66.3847 170.437 87.8586Z" fill="#25A8C3"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M128.746 126.745C112.3 126.745 98.9672 112.013 98.9672 93.841C98.9672 75.669 112.3 60.9388 128.746 60.9388C145.192 60.9388 158.526 75.669 158.526 93.841C158.526 112.013 145.192 126.745 128.746 126.745Z" fill="#1B1A18"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M144.995 84.3544C142.162 89.115 136.592 91.8683 132.552 90.4994C128.512 89.1329 127.534 84.163 130.365 79.4013C133.198 74.6389 138.768 71.8873 142.808 73.2541C146.848 74.6208 147.826 79.5904 144.995 84.3544Z" fill="#FFFFFE"/>
                  <g filter="url(#filter0_d)">
                    <rect x="27.7728" y="119.717" width="118.841" height="41.6666" fill="#EEEEEE"/>
                  </g>
                  <path d="M50.1592 152.857H58.2063C59.9837 152.857 61.4847 152.467 62.7094 151.687C63.9449 150.961 64.9095 150.04 65.6031 148.923C65.8632 148.501 66.0854 148.094 66.2696 147.704C66.443 147.303 66.5731 146.848 66.6598 146.338C66.844 145.331 66.9361 143.553 66.9361 141.006C66.9361 138.611 66.8765 136.926 66.7573 135.95C66.6056 134.975 66.2425 134.043 65.6681 133.154C64.0641 130.51 61.6581 129.177 58.4501 129.155H50.1592V152.857ZM53.7519 132.553H58.0437C59.8645 132.509 61.2734 133.176 62.2705 134.552C62.7582 135.105 63.067 135.826 63.1971 136.714C63.2946 137.603 63.3434 139.077 63.3434 141.136C63.3434 143.25 63.2946 144.691 63.1971 145.461C63.0887 146.241 62.834 146.886 62.433 147.395C61.5226 148.772 60.0595 149.46 58.0437 149.46H53.7519V132.553Z" fill="#333333"/>
                  <path d="M70.4645 152.857H85.5995V149.46H74.0572V142.502H83.9088V139.316H74.0572V132.553H85.5995V129.155H70.4645V152.857Z" fill="#333333"/>
                  <path d="M88.3313 152.857H91.9241V138.08H91.9891L96.9474 149.46H99.9386L104.897 138.08H104.978V152.857H108.571V129.155H105.173L98.508 144.599L91.7127 129.155H88.3313V152.857Z" fill="#333333"/>
                  <path d="M112.083 141.006C112.083 143.716 112.164 145.547 112.327 146.501C112.414 147.01 112.522 147.433 112.652 147.769C112.793 148.094 112.95 148.436 113.124 148.793C113.698 149.888 114.619 150.852 115.887 151.687C117.134 152.554 118.689 153.009 120.553 153.052C122.439 153.009 124.01 152.554 125.267 151.687C126.514 150.852 127.413 149.888 127.966 148.793C128.367 148.219 128.643 147.455 128.795 146.501C128.936 145.547 129.006 143.716 129.006 141.006C129.006 138.253 128.936 136.411 128.795 135.479C128.643 134.547 128.367 133.794 127.966 133.219C127.413 132.125 126.514 131.149 125.267 130.293C124.01 129.426 122.439 128.982 120.553 128.96C118.689 128.982 117.134 129.426 115.887 130.293C114.619 131.149 113.698 132.125 113.124 133.219C112.766 133.794 112.5 134.547 112.327 135.479C112.164 136.411 112.083 138.253 112.083 141.006ZM115.692 141.006C115.692 138.676 115.779 137.088 115.952 136.243C116.104 135.441 116.413 134.785 116.879 134.276C117.258 133.788 117.757 133.382 118.374 133.057C118.981 132.742 119.707 132.574 120.553 132.553C121.409 132.574 122.151 132.742 122.78 133.057C123.376 133.382 123.853 133.788 124.211 134.276C124.677 134.785 124.996 135.441 125.17 136.243C125.332 137.088 125.414 138.676 125.414 141.006C125.414 143.336 125.332 144.913 125.17 145.737C124.996 146.561 124.677 147.227 124.211 147.737C123.853 148.224 123.376 148.62 122.78 148.923C122.151 149.281 121.409 149.46 120.553 149.46C119.707 149.46 118.981 149.281 118.374 148.923C117.757 148.62 117.258 148.224 116.879 147.737C116.413 147.227 116.104 146.561 115.952 145.737C115.779 144.913 115.692 143.336 115.692 141.006Z" fill="#333333"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M217.054 237.514C216.597 236.246 216.368 234.64 216.368 232.484C216.368 230.329 216.597 228.723 217.054 227.455C218.334 223.82 221.72 221.833 226.156 221.833C229.448 221.833 232.056 223.059 233.793 225.003C233.932 225.172 233.976 225.426 233.749 225.595L230.867 227.919C230.638 228.088 230.408 228.046 230.227 227.835C229.128 226.694 227.985 226.06 226.156 226.06C224.19 226.06 222.679 226.948 222.039 228.723C221.672 229.737 221.582 230.921 221.582 232.484C221.582 234.048 221.672 235.274 222.039 236.289C222.679 238.021 224.19 238.909 226.156 238.909C227.985 238.909 229.128 238.275 230.227 237.134C230.408 236.923 230.638 236.923 230.867 237.092L233.749 239.416C233.976 239.585 233.932 239.797 233.793 240.008C232.056 241.91 229.448 243.136 226.156 243.136C221.72 243.136 218.334 241.149 217.054 237.514Z" fill="#111111"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M251.652 242.671C251.332 242.671 251.102 242.544 250.919 242.248L245.339 233.71L242.366 236.88V242.248C242.366 242.502 242.185 242.671 241.909 242.671H237.701C237.428 242.671 237.245 242.502 237.245 242.248V214.352C237.245 214.098 237.428 213.929 237.701 213.929H241.909C242.185 213.929 242.366 214.098 242.366 214.352V230.921L249.915 222.721C250.188 222.425 250.416 222.298 250.782 222.298H255.447C255.723 222.298 255.813 222.551 255.63 222.721L248.633 230.16L256.683 242.248C256.821 242.417 256.729 242.671 256.453 242.671H251.652Z" fill="#111111"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.41757 238.275H12.9124C15.9313 238.275 17.6233 236.669 17.6233 234.26C17.6233 231.893 15.9313 230.287 12.9124 230.287H6.41757C6.23501 230.287 6.14308 230.371 6.14308 230.54V238.021C6.14308 238.19 6.23501 238.275 6.41757 238.275ZM12.6381 225.891C15.3825 225.891 17.0745 224.369 17.0745 222.129C17.0745 219.847 15.3825 218.325 12.6381 218.325H6.41757C6.23501 218.325 6.14308 218.409 6.14308 218.579V225.637C6.14308 225.806 6.23501 225.891 6.41757 225.891H12.6381ZM0.746338 214.352C0.746338 214.098 0.929457 213.929 1.20321 213.929H12.7752C19.3615 213.929 22.4715 216.973 22.4715 221.579C22.4715 224.834 20.8253 226.694 18.858 227.666V227.751C20.7792 228.426 23.0201 230.709 23.0201 234.217C23.0201 239.923 19.1323 242.671 12.3178 242.671H1.20321C0.929457 242.671 0.746338 242.502 0.746338 242.248V214.352Z" fill="#111111"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M26.8144 242.671C26.5394 242.671 26.3561 242.502 26.3561 242.248V222.721C26.3561 222.467 26.5394 222.298 26.8144 222.298H31.0218C31.2961 222.298 31.4793 222.467 31.4793 222.721V224.454H31.5253C32.5767 222.89 34.452 221.833 37.2424 221.833C38.9798 221.833 40.7179 222.467 41.8614 223.524C42.0904 223.735 42.1364 223.905 41.9526 224.115L39.5284 226.948C39.346 227.159 39.1168 227.201 38.8886 227.032C37.8822 226.44 36.8301 226.06 35.6413 226.06C32.76 226.06 31.4793 227.962 31.4793 231.217V242.248C31.4793 242.502 31.2961 242.671 31.0218 242.671H26.8144Z" fill="#111111"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M56.0158 236.246C56.382 235.189 56.4734 234.217 56.4734 232.484C56.4734 230.752 56.382 229.822 56.0158 228.723C55.3751 227.032 53.958 226.06 51.8995 226.06C49.8412 226.06 48.3774 227.032 47.7375 228.723C47.372 229.822 47.28 230.752 47.28 232.484C47.28 234.217 47.372 235.189 47.7375 236.246C48.3774 237.937 49.8412 238.909 51.8995 238.909C53.958 238.909 55.3751 237.937 56.0158 236.246ZM42.7981 237.514C42.2947 236.077 42.0664 234.725 42.0664 232.484C42.0664 230.244 42.2947 228.892 42.7981 227.455C44.0328 223.905 47.4171 221.833 51.8995 221.833C56.3361 221.833 59.7205 223.905 60.9558 227.455C61.4586 228.892 61.6876 230.244 61.6876 232.484C61.6876 234.725 61.4586 236.077 60.9558 237.514C59.7205 241.065 56.3361 243.136 51.8995 243.136C47.4171 243.136 44.0328 241.065 42.7981 237.514Z" fill="#111111"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M83.8734 242.671C83.5983 242.671 83.4159 242.502 83.324 242.248L79.0705 229.23H78.9794L74.68 242.248C74.5881 242.502 74.4057 242.671 74.1307 242.671H70.3807C70.1056 242.671 69.9233 242.502 69.8321 242.248L62.8796 222.721C62.7877 222.467 62.9255 222.298 63.1999 222.298H67.5905C67.9108 222.298 68.0939 222.425 68.1851 222.721L72.4384 236.162H72.5303L76.7378 222.721C76.8297 222.467 77.0581 222.298 77.3324 222.298H80.6255C80.9 222.298 81.129 222.467 81.2202 222.721L85.7027 236.162H85.794L89.8189 222.721C89.9101 222.425 90.0934 222.298 90.4136 222.298H94.8041C95.0786 222.298 95.2156 222.467 95.1244 222.721L88.172 242.248C88.0808 242.502 87.8977 242.671 87.6234 242.671H83.8734Z" fill="#111111"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M96.0263 239.924C95.8438 239.755 95.8438 239.501 96.0263 239.332L98.6334 236.796C98.8165 236.627 99.0908 236.627 99.2741 236.796C100.875 238.149 103.436 239.121 105.723 239.121C108.421 239.121 109.793 238.106 109.793 236.711C109.793 235.485 109.016 234.725 106.135 234.471L103.756 234.26C99.2741 233.837 96.9865 231.724 96.9865 228.258C96.9865 224.327 100.051 221.833 105.54 221.833C108.97 221.833 111.853 222.89 113.819 224.327C114.048 224.496 114.048 224.75 113.909 224.919L111.669 227.413C111.486 227.624 111.257 227.624 111.029 227.497C109.656 226.609 107.461 225.806 105.266 225.806C103.07 225.806 101.927 226.694 101.927 227.92C101.927 229.104 102.704 229.822 105.54 230.076L107.918 230.287C112.537 230.71 114.732 232.908 114.732 236.247C114.732 240.304 111.531 243.136 105.494 243.136C100.966 243.136 97.8562 241.488 96.0263 239.924Z" fill="#111111"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M131.55 228.469C130.956 226.821 129.31 225.849 127.251 225.849C125.148 225.849 123.5 226.821 122.906 228.469C122.723 228.976 122.631 229.483 122.631 230.202C122.631 230.371 122.723 230.456 122.906 230.456H131.55C131.733 230.456 131.825 230.371 131.825 230.202C131.825 229.483 131.733 228.976 131.55 228.469ZM118.242 237.472C117.783 236.162 117.463 234.598 117.463 232.484C117.463 230.371 117.738 228.765 118.195 227.455C119.429 223.905 122.814 221.833 127.205 221.833C131.733 221.833 135.027 223.989 136.261 227.455C136.766 228.892 136.993 230.287 136.993 233.584C136.993 233.837 136.81 234.006 136.49 234.006H122.906C122.723 234.006 122.631 234.091 122.631 234.26C122.631 234.851 122.77 235.359 122.953 235.823C123.683 237.81 125.422 238.909 127.891 238.909C130.361 238.909 131.962 238.064 133.059 236.965C133.289 236.754 133.518 236.711 133.745 236.88L136.444 239.078C136.673 239.247 136.673 239.459 136.49 239.67C134.615 241.698 131.505 243.136 127.434 243.136C122.77 243.136 119.475 241.023 118.242 237.472Z" fill="#111111"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M140.787 242.671C140.513 242.671 140.33 242.502 140.33 242.248V222.721C140.33 222.467 140.513 222.298 140.787 222.298H144.995C145.268 222.298 145.451 222.467 145.451 222.721V224.454H145.498C146.548 222.89 148.424 221.833 151.215 221.833C152.954 221.833 154.69 222.467 155.834 223.524C156.063 223.735 156.107 223.905 155.926 224.115L153.501 226.948C153.32 227.159 153.091 227.201 152.861 227.032C151.855 226.44 150.802 226.06 149.615 226.06C146.733 226.06 145.451 227.962 145.451 231.217V242.248C145.451 242.502 145.268 242.671 144.995 242.671H140.787Z" fill="#111111"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M156.714 239.332C156.531 239.163 156.44 238.909 156.624 238.697L159.459 235.654C159.642 235.443 159.916 235.443 160.099 235.612C162.111 237.092 165.084 238.655 168.559 238.655C172.264 238.655 174.414 236.922 174.414 234.514C174.414 232.442 173.043 231.09 168.743 230.54L167.096 230.329C161.105 229.568 157.72 226.905 157.72 222.129C157.72 216.93 161.836 213.464 168.239 213.464C172.127 213.464 175.832 214.606 178.302 216.338C178.531 216.508 178.577 216.677 178.394 216.93L176.198 220.058C176.015 220.269 175.786 220.312 175.557 220.185C173.043 218.663 170.709 217.945 168.103 217.945C164.947 217.945 163.208 219.551 163.208 221.791C163.208 223.777 164.718 225.13 168.926 225.68L170.574 225.891C176.563 226.652 179.857 229.272 179.857 234.217C179.857 239.332 175.879 243.136 168.149 243.136C163.575 243.136 159.137 241.445 156.714 239.332Z" fill="#111111"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M189.335 243.03C184.898 243.03 183.205 241.043 183.205 237.07V226.335C183.205 226.166 183.115 226.081 182.931 226.081H181.466C181.193 226.081 181.01 225.912 181.01 225.658V222.826C181.01 222.573 181.193 222.404 181.466 222.404H182.931C183.115 222.404 183.205 222.319 183.205 222.15V216.57C183.205 216.317 183.388 216.148 183.662 216.148H187.87C188.146 216.148 188.329 216.317 188.329 216.57V222.15C188.329 222.319 188.419 222.404 188.602 222.404H191.53C191.804 222.404 191.987 222.573 191.987 222.826V225.658C191.987 225.912 191.804 226.081 191.53 226.081H188.602C188.419 226.081 188.329 226.166 188.329 226.335V236.902C188.329 238.338 188.969 238.803 190.387 238.803H191.53C191.804 238.803 191.987 238.972 191.987 239.226V242.607C191.987 242.861 191.804 243.03 191.53 243.03H189.335Z" fill="#111111"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M208.184 235.823V234.26C208.184 234.091 208.092 234.006 207.909 234.006H204.25C200.958 234.006 199.493 234.851 199.493 236.754C199.493 238.444 200.819 239.29 203.288 239.29C206.446 239.29 208.184 238.149 208.184 235.823ZM208.732 242.671C208.458 242.671 208.275 242.502 208.275 242.248V240.769H208.229C207.176 242.164 205.118 243.136 202.008 243.136C197.984 243.136 194.599 241.192 194.599 236.923C194.599 232.484 197.984 230.456 203.427 230.456H207.909C208.092 230.456 208.184 230.371 208.184 230.202V229.23C208.184 226.905 206.993 225.849 203.288 225.849C200.819 225.849 199.31 226.482 198.257 227.244C198.03 227.413 197.754 227.37 197.617 227.159L195.925 224.369C195.788 224.158 195.834 223.946 196.017 223.82C197.801 222.636 200.225 221.833 203.838 221.833C210.561 221.833 213.032 223.946 213.032 228.934V242.248C213.032 242.502 212.847 242.671 212.574 242.671H208.732Z" fill="#111111"/>
                  <defs>
                    <filter id="filter0_d" x="25.7728" y="119.717" width="124.841" height="47.6666" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                      <feOffset dx="1" dy="3"/>
                      <feGaussianBlur stdDeviation="1.5"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                  </defs>
                </svg>
              </a>
            </Link>
            <nav className="space-x-4 ml-6" style={{ display: 'flex' }}>
              <Link href="/offers">
                <a id="offers" className="Navbar_link__3Blki"><strong>Offers</strong></a>
              </Link>
              <Link href="/orders">
                <a id="orders" className="Navbar_link__3Blki"><strong>Orders</strong></a>
              </Link>
              <Link href="/favourites">
                <a id="favourites" className="Navbar_link__3Blki">
                  <strong>Favourites</strong>
                </a>
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 justify-end align-center space-x-8">
            {userName ? (<span className="username">{userName}</span>) : ''}
            <nav className="UserNav_root__343id align-center pt-1">
              <Link href="/offers">
                <a onClick={logOutHandler} className="Navbar_link__3Blki logout-link" id={userName ? "logout" : "signin"}>{userName ? 'Logout' : 'Sign In'}</a>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
