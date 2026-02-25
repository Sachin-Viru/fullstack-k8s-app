# Use official MongoDB image
FROM mongo:6

# Optional: Copy initialization scripts (like seed data)
COPY init.js /docker-entrypoint-initdb.d/

# Expose default MongoDB port
EXPOSE 27017
