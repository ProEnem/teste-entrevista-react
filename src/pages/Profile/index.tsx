import React, { useEffect, useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { CgLogOff, CgProfile } from 'react-icons/cg'
import { Link } from 'react-router-dom'

import api from '../../services/api'
import { useAuth } from '../../context/auth'
import NoAvatar from '../../assets/no-avatar.png'
import Card from '../../components/Card'
import { SContainer, SContent, SAvatarInput } from './styles'

interface ICourse {
    id: number
    name: string
}

interface IUserCredentials {
    name: string
    email: string
    courses: ICourse[]
    imageProfile?: string
}

const Profile: React.FC = () => {
    const { signOut } = useAuth()
    const [userInfo, setUserInfo] = useState<IUserCredentials>()

    useEffect(() => {
        const getUserInfo = async () => {
            const { data } = await api.get('/v1/person/me', {
                headers: {
                    Authorization: localStorage.getItem('@ProEnem: token'),
                    'X-Brand': 'proenem'
                }
            })
            const { name, email, courses, imageProfile } = data
            setUserInfo({
                name,
                email,
                courses: courses.map((course: ICourse) => ({
                    id: course.id,
                    name: course.name
                })),
                imageProfile
            })
        }
        getUserInfo()
    }, [])

    return (
        <SContainer>
            <header>
                <div className="logoff">
                    <Link to="/" onClick={signOut}>
                        <CgLogOff />
                    </Link>
                </div>
            </header>

            <SContent>
                <SAvatarInput>
                    <img src={userInfo?.imageProfile || NoAvatar} alt="user" />
                </SAvatarInput>

                <span className="name">
                    <CgProfile />
                    {userInfo?.name}
                </span>
                <span className="email">
                    <AiOutlineMail />
                    {userInfo?.email}
                </span>
                <div className="courses">
                    <span>Cursos</span>

                    <div className="cards">
                        {userInfo?.courses.map((course) => (
                            <Card key={course.id} name={course.name} />
                        ))}
                    </div>
                </div>
            </SContent>
        </SContainer>
    )
}

export default Profile
