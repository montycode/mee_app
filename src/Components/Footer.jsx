import React from 'react';
import Logo from '@/Assets/img/pbh_2.png'
import Mail from '@/Assets/img/icons/correo.svg'
import Phone from '@/Assets/img/icons/telefono.svg'
import Location from '@/Assets/img/icons/alfiler.svg'
import { Link } from 'react-router-dom';

export const Footer = ({ children, meeting }) => {
  return (
    <>
      {meeting
        ?
        <>
          <div className="col-span-1 bg-dark flex items-center justify-center text-white bg-black py-3 px-4 sm:px-6 lg:px-8">
            <div className="w-full p-1">
              <h2 className="mt-2 text-center text-xl font-semibold">
                Información
              </h2>
              <div className="flex flex-col max-w-6xl m-auto my-3">
                <div className="flex justify-left items-center">
                  <div className="p-1 w-10 h-10">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="far"
                  data-icon="envelope" className="svg-inline--fa fa-envelope fa-w-16" role="img" viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" />
                </svg> */}
                    <img className="w-15 h-15 bg-white" src={Mail} />
                  </div>
                  <div className="p-1">
                    <div>info@pbhabogados.com</div>
                  </div>
                </div>
                <div className="flex justify-left items-center">
                  <div className="p-1 w-10 h-10">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas"
                      data-icon="phone" className="svg-inline--fa fa-phone fa-w-16" role="img" viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
                    </svg> */}
                    <img className="w-15 h-15 bg-white" src={Phone} />
                  </div>
                  <div className="p-1">
                    <div>+52(664) 634 6206</div>
                  </div>
                </div>
                <div className="flex justify-left items-center">
                  <div className="p-1 w-15 h-15">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas"
                  data-icon="map-marker-alt" className="svg-inline--fa fa-map-marker-alt fa-w-12" role="img"
                  viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                </svg> */}
                    <img className="w-15 h-15 bg-white" src={Location} />
                  </div>
                  <div className="p-1 w-10/12">
                    <div>
                      Calle Joaquin Clausel 10343 2A, Zona Urbana Rio Tijuana, Tijuana, Baja California, México, C.P. 22010
                </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row max-w-6xl m-auto my-3 items-center justify-center">
                <div className="flex justify-left items-center">
                  <a href="#">
                    <div className="p-1 w-12 h-12 mx-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fab"
                        data-icon="facebook-square" className="svg-inline--fa fa-facebook-square fa-w-14" role="img"
                        viewBox="0 0 448 512">
                        <path fill="currentColor"
                          d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="flex justify-left items-center">
                  <a href="#">
                    <div className="p-1 w-12 h-12">
                      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fab"
                        data-icon="instagram" className="svg-inline--fa fa-instagram fa-w-14" role="img" viewBox="0 0 448 512">
                        <path fill="currentColor"
                          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
        :
        <>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="col-span-1 flex items-center justify-center bg-black py-12 px-4 sm:px-6 lg:px-8">
              <div className="w-full p-4">
                <h2 className="mt-6 text-left text-xl font-semibold text-white">
                  Contáctanos via correo electrónico
                </h2>
                <form className="mt-8 space-y-6" action="#" method="POST">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="px-2 py-4 col-span-1">
                      <label htmlFor="full-name" className="hidden">Name</label>
                      <input id="full-name" name="name" type="name" placeholder="Nombre*" required
                        className="relative block bg-black w-full p-2 border border-gray-300 placeholder-gray-500 text-white focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" />
                    </div>
                    <div className="px-2 py-4 col-span-1">
                      <label htmlFor="email-address" className="hidden">Correo</label>
                      <input id="email-address" name="email" type="email" placeholder="Correo*" autoComplete="email" required
                        className="relative block bg-black w-full p-2 border border-gray-300 placeholder-gray-500 text-white focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" />
                    </div>
                    <div className="px-2 py-2 col-span-1 md:col-span-2">
                      <span className="hidden">Mensaje</span>
                      <textarea
                        className="relative block bg-black w-full p-2 border border-gray-300 placeholder-gray-500 text-white focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                        rows="3" placeholder="Mensaje*"></textarea>
                    </div>
                  </div>
                  <div className="m-2 grid grid-cols-1 md:grid-cols-2">
                    <button type="submit"
                      className="group col-span-1 relative font-semibold uppercase flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-black bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">
                      Enviar Mensaje
                        </button>
                  </div>
                </form>
                {children}
              </div>
            </div>
            <div className="col-span-1 bg-dark flex items-center justify-center bg-gray-300 py-12 px-4 sm:px-6 lg:px-8">
              <div className="w-full p-4">
                <h2 className="mt-6 text-left text-xl font-semibold text-gray-900">
                  Información
              </h2>
                <div className="flex flex-col max-w-6xl m-auto my-10">
                  <div className="flex justify-left items-center">
                    <div className="p-2 w-10 h-10">
                      {/* <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="far"
                  data-icon="envelope" className="svg-inline--fa fa-envelope fa-w-16" role="img" viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" />
                </svg> */}
                      <img className="w-15 h-15" src={Mail} />
                    </div>
                    <div className="p-2">
                      <div>info@pbhabogados.com</div>
                    </div>
                  </div>
                  <div className="flex justify-left items-center">
                    <div className="p-2 w-10 h-10">
                      {/* <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas"
                      data-icon="phone" className="svg-inline--fa fa-phone fa-w-16" role="img" viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
                    </svg> */}
                      <img className="w-15 h-15" src={Phone} />
                    </div>
                    <div className="p-2">
                      <div>+52(664) 634 6206</div>
                    </div>
                  </div>
                  <div className="flex justify-left items-center">
                    <div className="p-2 w-15 h-15">
                      {/* <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas"
                  data-icon="map-marker-alt" className="svg-inline--fa fa-map-marker-alt fa-w-12" role="img"
                  viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                </svg> */}
                      <img className="w-15 h-15" src={Location} />
                    </div>
                    <div className="p-2 w-10/12">
                      <div>
                        Calle Joaquin Clausel 10343 2A, Zona Urbana Rio Tijuana, Tijuana, Baja California, México, C.P. 22010
                </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row max-w-6xl m-auto my-10">
                  <div className="flex justify-left items-center">
                    <a href="#">
                      <div className="p-2 w-12 h-12">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fab"
                          data-icon="facebook-square" className="svg-inline--fa fa-facebook-square fa-w-14" role="img"
                          viewBox="0 0 448 512">
                          <path fill="currentColor"
                            d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div className="flex justify-left items-center">
                    <a href="#">
                      <div className="p-2 w-12 h-12">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fab"
                          data-icon="instagram" className="svg-inline--fa fa-instagram fa-w-14" role="img" viewBox="0 0 448 512">
                          <path fill="currentColor"
                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <p className="block text-xs">
                  <Link
                    // href="/terms"
                    // target="popup"
                    to="/#"
                    onClick={() => window.open('/terms', 'popup', 'width=600,height=600')}
                  >
                    Términos y Condiciones</Link> | <Link
                    // href="/privacity"
                    // target="popup"
                    to="/#"
                    onClick={() => window.open('/privacity', 'popup', 'width=600,height=600')}
                  >
                    Aviso de privacidad</Link>
                </p>
                <p className="text-xs block">
                  Copyright © 2020 Auspiciado por <img className="inline h-8 mx-1" src={Logo} alt="" />| Made by CILABS
              </p>
              </div>
            </div>
          </div>
        </>
      }
    </>
  );
}