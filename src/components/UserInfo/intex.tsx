import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding } from '@fortawesome/free-regular-svg-icons'
import {
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import {
  GitHubLink,
  UserInfoContainer,
  UserInfoContent,
  UserInfoFooter,
} from './styles'

export function UserInfo() {
  return (
    <UserInfoContainer className="container">
      <img
        src="http://www.github.com/brunogallotte.png"
        alt="Imagem de perfil"
        className="profileImg"
      />
      <UserInfoContent>
        <strong>Bruno Gallotte</strong>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <UserInfoFooter>
          <div className="userInfoFooterItem">
            <FontAwesomeIcon icon={faGithub} />
            <span>brunogallotte</span>
          </div>
          <div className="userInfoFooterItem">
            <FontAwesomeIcon icon={faBuilding} />
            <span>RocketSeat</span>
          </div>
          <div className="userInfoFooterItem">
            <FontAwesomeIcon icon={faUserGroup} />
            <span>32 seguidores</span>
          </div>
        </UserInfoFooter>
      </UserInfoContent>
      <GitHubLink>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        <span>github</span>
      </GitHubLink>
    </UserInfoContainer>
  )
}
