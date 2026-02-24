// JAY JABIRU — SOKOBAN LEVELS
// Notation: # = wall, @ = player, $ = box, . = goal, * = box on goal, + = player on goal, ' ' = floor
// To add levels: fill the next null slot with your level object.
// NOTE: Maps from levels 4-5 reconstructed from Jay Jabiru's original designs at sokobanonline.com
// They may need minor tweaks — verify in-game and adjust box/goal positions if needed.

const LEVELS = [

  // ── LEVEL 1 ── ORBIT STATION ── 1/10 ──────────────────────────────────────
  {
    name: "Orbit Station",
    description: "First contact. Find your bearings.",
    map:
`#########
#   .   #
#  $ #  #
#   @   #
#  ###  #
#       #
#########`
  },

  // ── LEVEL 2 ── NEBULA DRIFT ── 2/10 ───────────────────────────────────────
  {
    name: "Nebula Drift",
    description: "Two crates, two destinies.",
    map:
`##########
#   ##   #
# $ .. $ #
#   ##   #
#   @    #
#        #
##########`
  },

  // ── LEVEL 3 ── DEEP SPACE LOCK ── 3/10 ────────────────────────────────────
  {
    name: "Deep Space Lock",
    description: "Think before you push. Space is unforgiving.",
    map:
`###########
#    #    #
# $  . $  #
# ## ## # #
#    @    #
#   ...   #
#  #####  #
#         #
###########`
  },

  // ── LEVEL 4 ── STELLAR COMPOSITION ── 6/10 ────────────────────────────────
  // Original design by Jay Jabiru — 11 wide × 6 tall
  // Row 1: 2 boxes top area, 2 goals right side, player far right
  // Row 2: 2 goals left side, 3 boxes middle-right cluster, 1 goal far right
  // Row 3: 1 box hanging below cluster
  {
    name: "Stellar Composition",
    description: "Wide open, but space deceives.",
    map:
`#############
# $  $  . .@#
#..  $$$  . #
#    $      #
#           #
#############`
  },

  // ── LEVEL 5 ── KATOO CAVERN ── 7/10 ───────────────────────────────────────
  // Original design by Jay Jabiru — 10 wide × 10 tall
  // Two-chamber irregular room, player bottom-right
  // Upper cluster: 2 boxes top-right, 3 boxes mid-left, 2 boxes mid-right
  // Lower: 1 box bottom-left area, 1 box bottom-right near player
  // Goals scattered across middle and lower-right
  {
    name: "Katoo Cavern",
    description: "Two chambers. One wrong move echoes through both.",
    map:
`############
##   ###   #
##   #  $$ #
# $$$      #
#   $$  .  #
#    . . . #
#  . .     #
#     $    #
#       $@ #
############`
  },

  // ── LEVEL 6 ── (SLOT RESERVED) ────────────────────────────────────────────
  null,

  // ── LEVEL 7 ── (SLOT RESERVED) ────────────────────────────────────────────
  null,

  // ── LEVEL 8 ── (SLOT RESERVED) ────────────────────────────────────────────
  null,

  // ── LEVEL 9 ── (SLOT RESERVED) ────────────────────────────────────────────
  null,

  // ── LEVEL 10 ── (SLOT RESERVED) ───────────────────────────────────────────
  null,

];

// Filter out null slots for the active level list
const ACTIVE_LEVELS = LEVELS.map((lvl, i) => lvl ? { ...lvl, levelIndex: i } : null).filter(Boolean);
