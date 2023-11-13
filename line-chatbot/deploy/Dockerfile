FROM node:20.9.0 as builder
ARG BUILD_ID
LABEL stage=builder
LABEL build=$BUILD_ID
USER node

WORKDIR /home/node

COPY --chown=node:node . /home/node


RUN npm install
RUN npm run build

RUN rm -rf /home/node/node_modules

RUN npm install --production

# ---

FROM node:20.9.0-alpine
# ENV NODE_ENV production

USER root
WORKDIR /home/node

COPY --from=builder /home/node/package.json /home/node/
# COPY --from=builder /home/node/log4js.json /home/node/
COPY --from=builder /home/node/dist/ /home/node/dist/
# COPY --from=builder /home/node/security /home/node/security
COPY --from=builder /home/node/node_modules/ /home/node/node_modules/



# RUN mkdir logs

CMD ["node", "dist/main.js"]

