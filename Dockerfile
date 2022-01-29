FROM archlinux:base AS base

USER root
RUN pacman -Sy && \
  pacman -S --noconfirm base-devel curl git unzip && \
  useradd -m skip
  

FROM base AS base-asdf

USER skip
WORKDIR /home/skip

RUN mkdir -p .aur && \
  cd "$_" && \
  git clone https://aur.archlinux.org/asdf-vm.git && \
  cd asdf-vm && \
  git checkout 9d3df3e96047119ec9bdb71f5bd4ad4d229113f0 && \
  makepkg

USER root

RUN cd /home/skip/.aur/asdf-vm && \
  pacman -U  --noconfirm asdf-vm-0.9.0-1-any.pkg.tar.zst

USER skip

COPY .tool-versions /home/skip/app/.tool-versions

WORKDIR /home/skip/app

RUN . /opt/asdf-vm/asdf.sh && \
  asdf plugin add elixir && \
  asdf plugin add erlang && \
  asdf plugin add nodejs && \
  asdf install

FROM archlinux:base AS skip-app

USER root

COPY --from=base-asdf /home/skip /home/skip
COPY --from=base-asdf /etc/passwd /etc/passwd
COPY --from=base-asdf /opt /opt

RUN pacman -Sy && \
  pacman -S --noconfirm yarn

WORKDIR /home/skip/app

COPY . .

RUN chown -R skip /home/skip && \
  chmod -R 700 /home/skip
USER skip

RUN . /opt/asdf-vm/asdf.sh && \
  mix local.hex --force && \
  mix deps.get && \
  cd assets && \
  yarn && \
  yarn build

CMD . /opt/asdf-vm/asdf.sh && \
  mix phx.server

