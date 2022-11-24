# Définition [Wikipedia](https://fr.wikipedia.org/wiki/Programmation_informatique)
La **programmation**, appelée aussi **codage** dans le domaine informatique, désigne l'ensemble des activités qui permettent l'écriture des [programmes informatiques](https://fr.wikipedia.org/wiki/Programme_informatique "Programme informatique"). C'est une étape importante du [développement de logiciels](https://fr.wikipedia.org/wiki/D%C3%A9veloppement_de_logiciel "Développement de logiciel")

La programmation représente donc ici la rédaction du [code source](https://fr.wikipedia.org/wiki/Code_source "Code source") d'un logiciel. On utilise plutôt le terme [développement](https://fr.wikipedia.org/wiki/D%C3%A9veloppement_de_logiciel "Développement de logiciel") pour dénoter l'ensemble des activités liées à la création d'un logiciel et des programmes qui le composent. Cela inclut la spécification du logiciel, sa conception, puis son implémentation proprement dite au sens de l'écriture des programmes dans un langage de programmation bien défini, ainsi que la vérification de sa correction, etc.

> Dans ce documents les exemple seront donnés en python par simplicité.

# Structure d'un programme
Lors de la création d'un programme la structure de celui-ci est très libre afin d'offrir le plus de possibilités possibles dans toutes les situations. Cependant quelques règles sont obligatoire afin d'assurer le fonctionnement du programme. Et certaine règle sont plus du commun-accord pour que tout à chacun puisse interpéter le code d'autres personnes.

## Variables
Une variable est un élément servant à stocker des données, 

### Types de variables
Dans notre cas, le python est un language très compréhensif, dans le sens où la taille ou le type de valeur n'as pas besoin d'être spécifié lors de la déclaration des variables.
Cependant l'interaction entre ceux-ci est important. Voici une liste exhaustive des type de variable:
- ``int`` (Entier):
	- C'est le type de valeur le plus utilisé, il peut contenir des nombres entier positif et négatif. 
	  Exemple (..., -50, -3, 0, 2, 35, ...)
- ``float`` (Nombre à virgule flottante):
	- Ce type ajoute de la précision à nos valeur en permettant d'avoir des chiffres à virgule, qui peuvent aussi être positif et négatif.
	  Exemple (..., -12.3, -1.268, 0.2, 3.1415, ...)
- ``char`` (Charactère)
	- Le but premier est de stocké la valeur d'un charactère codé en [ASCII](https://fr.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange), ce qui permet de manipuler plus facilement du texte. il peut s'écrire de différente manière suivant l'utilisation. Le charactère doit se trouver entre des apostrophe: ``'A'``.
- ``String`` (Texte)
	- Est une suite de ``char`` qui crée un texte complet. Il doit s'écrire entre des guillemets: ``"Bonjour"``

#### Limitations
Les valeurs de ces variable ne peuvent pas être infinie, la limitation viens du type de variable et/ou de la machine sur lequel le programme va tourné. Chaque type à une taille de bits définie qui donne ces limites:
- ``int`` contient 32 bits (4 octets) ce qui le limite de $-2^{31}$ à $2^{31}-1$.
- ``char`` contient 8 bits (1 octet) ce qui le limite de $-128$ à $127$.
- ``float`` contient aussi 32 bits mais se dispose d'une façon différente ([IEEE 754](https://fr.wikipedia.org/wiki/IEEE_754)), ce qui lui permet d'avoir des valeurs plus grandes, de $10^{-38}$ à $10^{38}$

### Manipulations de variables
La première étape est de déclarer la variable en lui donnant un nom et une valeur:
```python
myVarInt    = 123          # Variable à chiffre entier
myVarFloat  = 3.1415       # Variable à chiffre à virgule
myVarChar   = 'C'          # Variable d'un charactère
myVarString = "Bienvenue"  # Variable s'un texte
```
Avec ces valeur nous pouvons effectuer les opérations mathématiques standard (``+``, ``-``, ``*``, ``/``) et les enregistrer:
```python
myVarInt2   = myVarInt + 456      # 123 + 456 = 579
myVarFloat2 = myVarFloat + 1.4041 # 3.1415 + 1.4041 = 4.5456
```
Dans ce cas ou nous gardons des opérations sur des variable de même type aucun soucis n'apparaît. Mais si l'on mélange ceux-ci le programme doit modifier les variable afin de pouvoir faire les opérations correctement. Si l'on effectue une opération en un ``int`` et un ``float`` la valeur de sortie sera toujours de type ``float`` car elle permet une plus grand précision, de même lors d'une division le résultat obtiendra une virgule.
```python
myVarDiv  = 10 / 3  # 10 / 3 = 3.33333
myVarMult = 5 * 2.4 # 22.0
```

## Conditions

### if / elif / else
## Boucles
### while / do while
### for
## Fonction ``main``
Lors de la compilation du programme l'ordinateur à besoin de savoir où se trouve le début des instruction.
