const {username, password} = process.env
export const connection = "mongodb+srv://"+username+":"+password+"@cluster0.yi9ne8e.mongodb.net/next-database?retryWrites=true&w=majority"