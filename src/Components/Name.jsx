import React, { useEffect, useState } from 'react'
import { userService } from '../Services/user.service'
import PrfileIcon from '@/Assets/img/icons/profile.svg'


export const Name = ({ name }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    let first_name;
    let last_name;
    // let is_lawyer;
    useEffect(() => {
        userService.getUser()
            .then((user) => {
                setUser(user.user)
                setLoading(false)
            }
            );
    }, []);
    if (!loading) {

        first_name = user.first_name;
        last_name = user.last_name;
        // is_lawyer = user.is_lawyer;
    }
    return (
        <>
            <div className="space-x-4 flex h-14 inline-block w:4/4">
                <div className="mb-auto mt-auto">
                    <img className="w-10 h-10" src={PrfileIcon} />
                </div>
                <div className="justify-center mb-auto mt-auto">
                    <h2 className="text-2xl font-bold">Bienvenido, {first_name}</h2>
                </div>
            </div>
        </>
    )


}
