// JAY JABIRU — SOKOBAN LEVELS
// Notation: # = wall, @ = player, $ = box, . = goal, * = box on goal, + = player on goal, ' ' = floor
// To add levels: fill the next null slot with your level object.
// Use sokoban-converter.html to convert levels from sokobanonline.com JSON format.

const LEVELS = [

  // ── LEVEL 1 ── TUTORIAL: ORBIT STATION ── 1/10 ────────────────────────────
  {
    name: "Tutorial — Orbit Station",
    description: "Push boxes onto the diamonds. Boxes can only be pushed, not pulled. The order matters. Well — this first level you could play blind.",
    map:
`    #####
####    #
#.##   $#
#$#.# #.#
#  $$ .##
# # ####
# @ #
#   #
#####`
  },

  // ── LEVEL 2 ── DISORDER IN THE MARTIAN ATTIC ──────────────────────────────
  {
    name: "Disorder in the Martian Attic",
    description: "The last trainee left some boxes unattended. Move the packages to safety before the Mars rats move in. Get to work.",
    map:
` ## ####
#. #   #
#  # # ##
# @$   $ #
#.  ## # #
#### #   #
      ####`
  },

  // ── LEVEL 3 ── WEEKEND FEVER ──────────────────────────────────────────────
  {
    name: "Weekend Fever",
    description: "Yeah, it's Friday. On Mars, a Friday workday only has 1 hour. Let's get this done. The hard Monday work? After the weekend I have the whole team helping me.",
    map:
`##########
# $ $ ..@#
#..  $$$.#
#     #  #
#        #
#########`
  },

  // ── LEVEL 4 ── STRESS TEST ────────────────────────────────────────────────
  {
    name: "Stress Test",
    description: "We are sooo sorry. The whole work force is ill. We are incredibly happy that we can still do it... well, you have to do it, or else you are fired.",
    map:
` ########
#.     .#
# #@   .#
# $      #
# $#$# $ #
## #  #  #
#.    #$ #
#  #  # .#
 #########`
  },

  // ── LEVEL 5 ── (SLOT RESERVED) ────────────────────────────────────────────
  null,

  // ── LEVEL 6 ── DINNER PARTY ── 7/10 ──────────────────────────────────────
  {
    name: "Dinner Party",
    description: "Today is a bit more relaxed... they said. It's a business dinner and a dissident of the Galactic Empire came. My boss said 'don't worry'. He also said 'clean the kitchen right now and bring everything to order‼'",
    map:
`##########
#   #    #
#   # $$ #
# $$$ #  #
#  $ $ ..#
#   # #..#
# . ..#$ #
#   ..# $#
#     # @#
##########`
  },

  // ── LEVEL 7 ── (SLOT RESERVED) ────────────────────────────────────────────
  null,

  // ── LEVEL 8 ── (SLOT RESERVED) ────────────────────────────────────────────
  null,

  // ── LEVEL 9 ── (SLOT RESERVED) ────────────────────────────────────────────
  null,

  // ── LEVEL 10 ── ESCAPE THE TRAP ───────────────────────────────────────────
  {
    name: "Escape the Trap",
    description: "Heck. I must be on their ship. They have put me to sleep somehow. Time to plan my escape.",
    map:
`#########
#.. $ #
#$$ .$.#
#@$ $.$.#
#.$ $$ #
#$ .... #
#. $ ####
######`
  },

];

// Filter out null slots for the active level list
const ACTIVE_LEVELS = LEVELS.map((lvl, i) => lvl ? { ...lvl, levelIndex: i } : null).filter(Boolean);
