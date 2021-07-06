FROM gitpod/workspace-full
RUN sudo apt-get -qq update && sudo apt-get install -y fish && sudo chsh -s $(which fish)
RUN sh -c "$(curl -fsSL https://starship.rs/install.sh)" -- --yes && mkdir -p .config/fish && echo "starship init fish | source" > .config/fish/config.fish
RUN curl -LO https://raw.githubusercontent.com/drud/ddev/master/scripts/install_ddev.sh && bash install_ddev.sh && rm -rf install_ddev.sh