import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding } from '@fortawesome/free-regular-svg-icons'
import {
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import * as S from './styles'

import { api } from '../../lib/axios'
import { useEffect, useState } from 'react'
import { SkeletonLoading } from './components'

interface User {
  login: string
  followers: number
  company: string
  bio: string
  html_url: string
}

export function UserInfo() {
  const [userInfoData, setUserInfoData] = useState<User>({} as User)

  async function fetchUserInfo() {
    const response = await api.get('/users/brunogallotte')

    setUserInfoData(response.data)
  }

  useEffect(() => {
    setTimeout(() => {
      fetchUserInfo()
    }, 1000)
  }, [])

  return (
    <S.UserInfoContainer className="container">
      <img
        src="http://www.github.com/brunogallotte.png"
        alt="Imagem de perfil"
        className="profileImg"
      />
      <S.UserInfoContent>
        {userInfoData.login ? (
          <>
            <strong>{userInfoData.login}</strong>
            <p>{userInfoData.bio}</p>
            <S.UserInfoFooter>
              <div className="userInfoFooterItem">
                <FontAwesomeIcon icon={faGithub} />
                <span>{userInfoData.login}</span>
              </div>
              <div className="userInfoFooterItem">
                <FontAwesomeIcon icon={faBuilding} />
                <span>
                  {userInfoData.company
                    ? userInfoData.company
                    : 'Sem companhia'}
                </span>
              </div>
              <div className="userInfoFooterItem">
                <FontAwesomeIcon icon={faUserGroup} />
                <span>{userInfoData.followers}</span>
              </div>
            </S.UserInfoFooter>
          </>
        ) : (
          <SkeletonLoading />
        )}
      </S.UserInfoContent>
      <S.GitHubLink href={userInfoData.html_url} target="_blank">
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        <span>github</span>
      </S.GitHubLink>
    </S.UserInfoContainer>
  )
}
