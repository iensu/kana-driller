{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, utils }:
    utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
        {
          devShell = pkgs.mkShell {
            buildInputs = with pkgs; [
              nodejs
              nodePackages.prettier
              nodePackages.typescript
              nodePackages.typescript-language-server
              vscode-langservers-extracted
            ];

            shellHook = ''
              export PATH="$(pwd)/node_modules/.bin:$PATH";
            '';
          };
    });
}
