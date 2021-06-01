import React, { useEffect, useState, useRef } from 'react'
// import { FaUserEdit } from 'react-icons/fa';
import { userService } from '../Services/user.service'
import { DataForm } from '@/Components'
import { Navbar } from '@/Components'
import Logo from '@/Assets/img/pbh_2.png'
import Edidt from '@/Assets/img/icons/icn_edit_profile.svg'
import Profile from '@/Assets/img/icons/icn_profile.svg'

export const ProfileData = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    // const [img, setImg] = useLocalStorage("img", "");
    // const [img, setImg] = useState("");
    let first_name;
    let last_name;
    let sencond_last_name;
    let married_last_name;
    let marital_status;
    let date_of_birth;
    let nationality;
    let place_of_birth;
    let country_born;
    let state_born;
    let city_born;
    let country_residence;
    let state_residence;
    let city_residence;
    let place_of_residence;
    let zip_code;
    let email
    let phone;
    let mobile_phone;
    let ocupation;
    let is_lawyer;
    useEffect(() => {
        userService.getUser()
            .then((user) => {
                setUser(user.user)
                setLoading(false)
            }
            );
    }, []);
    if (!loading) {
        console.log(user);
        first_name = user.first_name;
        last_name = user.last_name;
        sencond_last_name = user.sencond_last_name;
        married_last_name = user.married_last_name;
        marital_status = user.marital_status;
        date_of_birth = user.date_of_birth;
        nationality = user.nationality;
        place_of_birth = user.place_of_birth;
        place_of_residence = user.city_of_residence;
        zip_code = user.zip_code;
        email = user.email;
        phone = user.phone;
        mobile_phone = user.mobile_phone;
        ocupation = user.ocupation;
        country_born = "";
        state_born = "";
        city_born = "";
        is_lawyer = user.is_lawyer;
        country_residence = "";
        state_residence = "";
        city_residence = "";
        let split;
        let split2;
        //split place of birth
        if (user.place_of_birth !== null) {
            split = user.place_of_birth.split(" ");
            country_born = split[0];
            state_born = split[1];
            city_born = split[2];
        }
        //split place of recidence
        if (user.city_of_residence !== null) {
            split2 = user.city_of_residence.split(" ");
            country_residence = split2[0];
            state_residence = split2[1];
            city_residence = split2[2];
        }
        // console.log(country, state, city);
    }

    let flag = true;
    let file = null;
    const changeHandler = (event) => {
        file = event.target.files[0];
        flag = false;
        console.log(file)
        if(!flag){
            userService.fileSubmission(file);
        }
    };
    console.log = console.warn = console.error = () => {};
    return (
        <div className="w-full bg-white">
            <div className="">
                <Navbar  is_lawyer={is_lawyer}  logo={Logo} />
            </div>
            <div className="flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="w-full">
                    <div className="text-align: center w-1/2 mx-auto">
                        {/* <img className="block mx-auto  w-40 h-40 z-10" src={Profile} /> */}
                        {flag !== null
                            ?<img className="block mx-auto  w-40 h-40 z-10" src={Profile} />
                            :<img className="block mx-auto  w-40 h-40 z-10" src={file} />
                        }
                        <label htmlFor="img">
                            <img id="blah" className="block  mx-auto -top-10 -right-12 w-10 h-10  relative z-20" src={Edidt} />
                        </label>
                        <input
                            onChange={changeHandler}
                            // onChange="readURL(this);"
                            // onChange="document.getElementById('blah').src = window.URL.createObjectURL(this.files[0])"
                            // value={name}
                            type="file" id="img" name="img" accept="image/*" className="hidden" />
                        {/* <FaUserEdit size="10rem" className="mx-auto" /> */}
                        <h2 className="mt-6 text-center text-3xl font-semibold text-gray-900">
                            {first_name} {last_name} {sencond_last_name}
                        </h2>
                    </div>
                    <div className="mt-5">
                        <p className="text-center ">Tu registro aún está pendiente, porfavor llenar todos los campos pendientes.</p>
                        <p className="text-center ">Campos marcados como <span className="text-red-500 text-xl">*</span> son obligatorios.</p>
                    </div>

                    <DataForm
                        first_name={first_name} last_name={last_name} sencond_last_name={sencond_last_name} married_last_name={married_last_name}
                        marital_status={marital_status} date_of_birth={date_of_birth} nationality={nationality} country_born={country_born} state_born={state_born}
                        city_born={city_born} country_residence={country_residence} state_residence={state_residence} city_residence={city_residence} zip_code={zip_code} email={email} phone={phone} mobile_phone={mobile_phone}
                        // ocupation={ocupation}
                    />
                </div>
            </div>
        </div>
    );
    // // Hook
    // function useLocalStorage(key, initialValue) {
    //     // State to store our value
    //     // Pass initial state function to useState so logic is only executed once
    //     const [storedValue, setStoredValue] = useState(() => {
    //         try {
    //             // Get from local storage by key
    //             const item = window.localStorage.getItem(key);
    //             // Parse stored json or if none return initialValue
    //             return item ? JSON.parse(item) : initialValue;
    //         } catch (error) {
    //             // If error also return initialValue
    //             console.log(error);
    //             return initialValue;
    //         }
    //     });
    //     // Return a wrapped version of useState's setter function that ...
    //     // ... persists the new value to localStorage.
    //     const setValue = (value) => {
    //         try {
    //             // Allow value to be a function so we have same API as useState
    //             const valueToStore =
    //                 value instanceof Function ? value(storedValue) : value;
    //             // Save state
    //             setStoredValue(valueToStore);
    //             // Save to local storage
    //             window.localStorage.setItem(key, JSON.stringify(valueToStore));
    //         } catch (error) {
    //             // A more advanced implementation would handle the error case
    //             console.log(error);
    //         }
    //     };
    //     return [storedValue, setValue];
    // }
}