FROM node:20-alpine

# Create application directory
WORKDIR /usr/src/app

# The asterisk ("*") is used to copy both files: package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app code
COPY . .

# Run EXPOSE
EXPOSE 3040

#Run service
CMD [ "node", "index.js" ]
