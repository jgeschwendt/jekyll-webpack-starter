FROM ruby:latest
MAINTAINER jgeschwendt

COPY ./Gemfile      /code/Gemfile
COPY ./Gemfile.lock /code/Gemfile.lock

RUN gem install bundler
RUN cd /code && \
    bundle lock --add-platform x86-mingw32 x86-mswin32 x64-mingw32 java && \
    bundle install && \
    cd ../

COPY . /code

WORKDIR /code
ENTRYPOINT bundle exec jekyll build --watch
