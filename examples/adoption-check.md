# jev-plu-preflight — contrôle d’adoption · adoption check · comprobación de adopción

## Français

Point de départ local, après la préparation indiquée dans le README :

```sh
npm run demo:parcours
```

Une règle de recul ne suffit pas si la zone ou la parcelle du projet est incertaine. Examinez les données manquantes du parcours avant de conclure à la conformité.

## English

Local starting point, after the setup described in the README:

```sh
npm run demo:parcours
```

A setback rule is insufficient when the project zone or parcel is uncertain. Inspect missing data in the walkthrough before concluding compliance.

## Español

Punto de partida local, después de la preparación descrita en el README:

```sh
npm run demo:parcours
```

Una regla de retranqueo no basta si la zona o la parcela del proyecto es incierta. Revise los datos faltantes del recorrido antes de concluir que cumple la norma.
## Variante synthétique · Synthetic variation · Variante sintética

```text
project.parcel=null; setback_rule=3m
```

FR : adaptez une copie de la fixture locale à cette situation, puis vérifiez le comportement décrit ci-dessus. Les valeurs sont illustratives, pas des résultats Jev mesurés.

EN: adapt a copy of the local fixture to this situation, then check the behavior described above. Values are illustrative, not measured Jev output.

ES: adapte una copia de la fixture local a esta situación y compruebe el comportamiento descrito arriba. Los valores son ilustrativos, no resultados Jev medidos.

## Second cas · Second case · Segundo caso

```text
zone=UC; project.setback=null; rule.setback_m=3
```

**FR :** Même avec une zone connue, l’absence de recul du projet demande une information complémentaire. Ne transformez pas ce manque en conformité.

**EN:** Even with a known zone, a missing project setback requires more information. Do not treat missing data as compliance.

**ES:** Aunque se conozca la zona, la ausencia del retranqueo del proyecto requiere más información. No trate los datos faltantes como cumplimiento.
