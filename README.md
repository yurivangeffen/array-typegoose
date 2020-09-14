# Test repo
Should reproduce the issue in https://github.com/typegoose/typegoose/issues/374.

## Build
`yarn build`

## Run
`node ./dist`

## Output
```
UnhandledPromiseRejectionWarning: ValidationError: Project validation failed: users: Cast to ObjectId failed for value "[]" at path "users"
...
```

## Notes
- Project set up with [TSDX](https://github.com/formium/tsdx) (MIT).
- If your mongo database is not located at 127.0.0.1 (or /test is not a database you want to use for this) you'll need to edit [index.ts](./src/index.ts) for this to run.
- If your database credentials are not admin:admin, please add `DATABASE_USERNAME` and `DATABASE_PASSWORD` to `.env` in the root of this project.