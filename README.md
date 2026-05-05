# Buddy Challenges

Este repositório reúne desafios de JavaScript para registrar exercícios, acompanhar progresso e revisar as soluções desenvolvidas durante o estágio.

Os exercícios estão organizados por contexto dentro da pasta [`list`](list). A ordem das pastas deve ser seguida, porque cada grupo de exercícios foi pensado para evoluir gradualmente os conceitos praticados.

## Como trabalhar neste repositório

O estagiário deve trabalhar em um fork próprio deste repositório. Assim, as soluções ficam no repositório pessoal dele, enquanto este repositório continua sendo a fonte principal dos desafios.

## Criando o fork

1. Acesse este repositório no GitHub.
2. Clique em `Fork`.
3. Crie o fork na sua conta pessoal.
4. Clone o seu fork na máquina:

```bash
git clone git@github.com:SEU_USUARIO/buddy-challenges.git
cd buddy-challenges
```

## Configurando o repositório original como upstream

Depois de clonar o fork, configure este repositório original como `upstream`:

```bash
git remote add upstream git@github.com:Matheusd3v/buddy-challenges.git
```

Confira se os remotos ficaram corretos:

```bash
git remote -v
```

O resultado deve ter:

- `origin`: apontando para o fork do estagiário
- `upstream`: apontando para `git@github.com:Matheusd3v/buddy-challenges.git`

## Mantendo a main atualizada

Antes de começar novos exercícios, atualize sempre a branch `main` do fork com a `main` deste repositório:

```bash
git switch main
git fetch upstream
git pull upstream main
git push origin main
```

Esse fluxo garante que o fork continue recebendo novos desafios, ajustes de enunciado e testes adicionados neste repositório.

## Resolvendo exercícios

1. Atualize a `main` seguindo os comandos acima.
2. Abra a próxima pasta da lista em [`list`](list).
3. Leia o enunciado do desafio.
4. Implemente a solução no arquivo indicado.
5. Rode os testes quando existirem.
6. Faça commit e push das suas soluções para o seu fork.
