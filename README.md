# club-management
Club Management App

## Docs
`POST /api/v1/auth/signup` name, userName, email, password (return token and user)
`POST /api/v1/auth/login` email, password (return token and user)
`POST /api/v1/club` name, description (send token in Authorization header like this Bearer <token value>)
`POST /api/v1/invite` clubId, inviteeId (user you want to invite) (send token in Authorization header like this Bearer <token value>)
