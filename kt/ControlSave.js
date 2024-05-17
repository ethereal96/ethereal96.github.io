// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'));
  } else {
    root.ControlSave = factory(root.KaitaiStream);
  }
}(this, function (KaitaiStream) {
var ControlSave = (function() {
  ControlSave.DataTypes = Object.freeze({
    GLOBAL_VARIABLE_MANAGER: 542507875,
    MISSION_MANAGER: 897885379,
    LOOT_DROP: 948665365,
    VENDOR: 1019016931,
    PLAYER_PROPERTIES: 1721202367,
    EXPEDITION_MANAGER: 2134335914,
    TRIALS: 2227510435,
    TUTORIAL_MANAGER: 2500542964,
    OUTFIT: 3357797087,
    INVENTORY: 3388499232,
    ENCOUNTER_DIRECTOR: 4156221793,

    542507875: "GLOBAL_VARIABLE_MANAGER",
    897885379: "MISSION_MANAGER",
    948665365: "LOOT_DROP",
    1019016931: "VENDOR",
    1721202367: "PLAYER_PROPERTIES",
    2134335914: "EXPEDITION_MANAGER",
    2227510435: "TRIALS",
    2500542964: "TUTORIAL_MANAGER",
    3357797087: "OUTFIT",
    3388499232: "INVENTORY",
    4156221793: "ENCOUNTER_DIRECTOR",
  });

  function ControlSave(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;
    this._debug = {};

  }
  ControlSave.prototype._read = function() {
    this._debug.header = { start: this._io.pos, ioOffset: this._io._byteOffset };
    this.header = new Header(this._io, this, this._root);
    this.header._read();
    this._debug.header.end = this._io.pos;
    this._debug.chunks = { start: this._io.pos, ioOffset: this._io._byteOffset };
    this.chunks = new Array(this.header.numChunks);
    this._debug.chunks.arr = new Array(this.header.numChunks);
    for (var i = 0; i < this.header.numChunks; i++) {
      this._debug.chunks.arr[i] = { start: this._io.pos, ioOffset: this._io._byteOffset };
      var _t_chunks = new Chunk(this._io, this, this._root);
      _t_chunks._read();
      this.chunks[i] = _t_chunks;
      this._debug.chunks.arr[i].end = this._io.pos;
    }
    this._debug.chunks.end = this._io.pos;
  }

  var VersionData = ControlSave.VersionData = (function() {
    function VersionData(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    VersionData.prototype._read = function() {
      this._debug.objectVersion = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.objectVersion = this._io.readU4le();
      this._debug.objectVersion.end = this._io.pos;
      this._debug.unk2 = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.unk2 = this._io.readU4le();
      this._debug.unk2.end = this._io.pos;
      this._debug.unk3 = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.unk3 = this._io.readU4le();
      this._debug.unk3.end = this._io.pos;
      this._debug.unk4 = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.unk4 = this._io.readU4le();
      this._debug.unk4.end = this._io.pos;
      this._debug.unk5 = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.unk5 = this._io.readU4le();
      this._debug.unk5.end = this._io.pos;
    }

    return VersionData;
  })();

  var StrType = ControlSave.StrType = (function() {
    function StrType(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    StrType.prototype._read = function() {
      this._debug.strLen = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.strLen = this._io.readU4le();
      this._debug.strLen.end = this._io.pos;
      this._debug.str = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.str = KaitaiStream.bytesToStr(this._io.readBytes(this.strLen), "UTF-8");
      this._debug.str.end = this._io.pos;
    }

    return StrType;
  })();

  var Chunk = ControlSave.Chunk = (function() {
    function Chunk(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    Chunk.prototype._read = function() {
      this._debug.uidLow = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.uidLow = this._io.readU4le();
      this._debug.uidLow.end = this._io.pos;
      this._debug.uidHigh = { start: this._io.pos, ioOffset: this._io._byteOffset, enumName: "ControlSave.DataTypes" };
      this.uidHigh = this._io.readU4le();
      this._debug.uidHigh.end = this._io.pos;
      this._debug.size = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.size = this._io.readU4le();
      this._debug.size.end = this._io.pos;
      this._debug.data = { start: this._io.pos, ioOffset: this._io._byteOffset };
      switch (this.uidHigh) {
      case ControlSave.DataTypes.INVENTORY:
        this._raw_data = this._io.readBytes(this.size);
        var _io__raw_data = new KaitaiStream(this._raw_data);
        this.data = new GameInventory(_io__raw_data, this, this._root);
        this.data._read();
        break;
      case ControlSave.DataTypes.MISSION_MANAGER:
        this._raw_data = this._io.readBytes(this.size);
        var _io__raw_data = new KaitaiStream(this._raw_data);
        this.data = new MissionManager(_io__raw_data, this, this._root);
        this.data._read();
        break;
      case ControlSave.DataTypes.OUTFIT:
        this._raw_data = this._io.readBytes(this.size);
        var _io__raw_data = new KaitaiStream(this._raw_data);
        this.data = new OutfitData(_io__raw_data, this, this._root);
        this.data._read();
        break;
      case ControlSave.DataTypes.PLAYER_PROPERTIES:
        this._raw_data = this._io.readBytes(this.size);
        var _io__raw_data = new KaitaiStream(this._raw_data);
        this.data = new PlayerProperties(_io__raw_data, this, this._root);
        this.data._read();
        break;
      case ControlSave.DataTypes.TRIALS:
        this._raw_data = this._io.readBytes(this.size);
        var _io__raw_data = new KaitaiStream(this._raw_data);
        this.data = new PlayerTrials(_io__raw_data, this, this._root);
        this.data._read();
        break;
      default:
        this._raw_data = this._io.readBytes(this.size);
        var _io__raw_data = new KaitaiStream(this._raw_data);
        this.data = new UnknownData(_io__raw_data, this, this._root);
        this.data._read();
        break;
      }
      this._debug.data.end = this._io.pos;
    }

    /**
     * hack - splitting up a u8 UID into two u4s since kaitai ide cannot handle large u8 values in enums
     */

    return Chunk;
  })();

  var OspInt = ControlSave.OspInt = (function() {
    function OspInt(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    OspInt.prototype._read = function() {
      this._debug.objectVersion = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.objectVersion = this._io.readU4le();
      this._debug.objectVersion.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.value = this._io.readU4le();
      this._debug.value.end = this._io.pos;
    }

    return OspInt;
  })();

  /**
   * ItemSaveData class
   */

  var GameInventoryItemData = ControlSave.GameInventoryItemData = (function() {
    function GameInventoryItemData(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    GameInventoryItemData.prototype._read = function() {
      this._debug.objectVersion = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.objectVersion = this._io.readU4le();
      this._debug.objectVersion.end = this._io.pos;
      this._debug.gid = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.gid = this._io.readU8le();
      this._debug.gid.end = this._io.pos;
      this._debug.parameter = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.parameter = this._io.readF4le();
      this._debug.parameter.end = this._io.pos;
      this._debug.overchargeNormalizedValue = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.overchargeNormalizedValue = this._io.readU4le();
      this._debug.overchargeNormalizedValue.end = this._io.pos;
      this._debug.persistentId = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.persistentId = this._io.readU8le();
      this._debug.persistentId.end = this._io.pos;
      this._debug.quantity = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.quantity = this._io.readU4le();
      this._debug.quantity.end = this._io.pos;
    }

    /**
     * loot parameter. magnitude of a mod, if this is a mod
     */

    return GameInventoryItemData;
  })();

  var MissionManagerMissionStep = ControlSave.MissionManagerMissionStep = (function() {
    function MissionManagerMissionStep(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    MissionManagerMissionStep.prototype._read = function() {
      this._debug.gidMissionStepId = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.gidMissionStepId = this._io.readU8le();
      this._debug.gidMissionStepId.end = this._io.pos;
      this._debug.currentProgress = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.currentProgress = this._io.readU4le();
      this._debug.currentProgress.end = this._io.pos;
      this._debug.goalProgress = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.goalProgress = this._io.readU4le();
      this._debug.goalProgress.end = this._io.pos;
      this._debug.stepState = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.stepState = this._io.readU4le();
      this._debug.stepState.end = this._io.pos;
      this._debug.index = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.index = this._io.readU4le();
      this._debug.index.end = this._io.pos;
      this._debug.unk = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.unk = this._io.readU4le();
      this._debug.unk.end = this._io.pos;
      this._debug.gidLocation = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.gidLocation = this._io.readU8le();
      this._debug.gidLocation.end = this._io.pos;
      this._debug.gidMissionStepId2 = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.gidMissionStepId2 = this._io.readU8le();
      this._debug.gidMissionStepId2.end = this._io.pos;
    }

    return MissionManagerMissionStep;
  })();

  var ControlPointData = ControlSave.ControlPointData = (function() {
    function ControlPointData(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    ControlPointData.prototype._read = function() {
      this._debug.gid = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.gid = this._io.readU8le();
      this._debug.gid.end = this._io.pos;
      this._debug.unk2 = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.unk2 = this._io.readU4le();
      this._debug.unk2.end = this._io.pos;
      this._debug.str1 = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.str1 = new StrType(this._io, this, this._root);
      this.str1._read();
      this._debug.str1.end = this._io.pos;
      this._debug.str2 = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.str2 = new StrType(this._io, this, this._root);
      this.str2._read();
      this._debug.str2.end = this._io.pos;
      this._debug.str3 = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.str3 = new StrType(this._io, this, this._root);
      this.str3._read();
      this._debug.str3.end = this._io.pos;
    }

    return ControlPointData;
  })();

  var PlayerProperties = ControlSave.PlayerProperties = (function() {
    function PlayerProperties(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    PlayerProperties.prototype._read = function() {
      this._debug.versionData = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.versionData = new VersionData(this._io, this, this._root);
      this.versionData._read();
      this._debug.versionData.end = this._io.pos;
      this._debug.source = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.source = this._io.readU8le();
      this._debug.source.end = this._io.pos;
      this._debug.abilityPoints = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.abilityPoints = this._io.readU4le();
      this._debug.abilityPoints.end = this._io.pos;
      this._debug.sectorsVisited = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.sectorsVisited = new GidArray(this._io, this, this._root);
      this.sectorsVisited._read();
      this._debug.sectorsVisited.end = this._io.pos;
      this._debug.numEnemyTypesUnlocked = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.numEnemyTypesUnlocked = this._io.readU4le();
      this._debug.numEnemyTypesUnlocked.end = this._io.pos;
      this._debug.enemyType = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.enemyType = new Array(this.numEnemyTypesUnlocked);
      this._debug.enemyType.arr = new Array(this.numEnemyTypesUnlocked);
      for (var i = 0; i < this.numEnemyTypesUnlocked; i++) {
        this._debug.enemyType.arr[i] = { start: this._io.pos, ioOffset: this._io._byteOffset };
        this.enemyType[i] = this._io.readU4le();
        this._debug.enemyType.arr[i].end = this._io.pos;
      }
      this._debug.enemyType.end = this._io.pos;
      this._debug.gidCurrentSector = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.gidCurrentSector = this._io.readU8le();
      this._debug.gidCurrentSector.end = this._io.pos;
      this._debug.foundNarrativeObjects = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.foundNarrativeObjects = new GidArray(this._io, this, this._root);
      this.foundNarrativeObjects._read();
      this._debug.foundNarrativeObjects.end = this._io.pos;
      this._debug.numUnlockedControlPoints = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.numUnlockedControlPoints = this._io.readU4le();
      this._debug.numUnlockedControlPoints.end = this._io.pos;
      this._debug.unlockedControlPoints = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.unlockedControlPoints = new Array(this.numUnlockedControlPoints);
      this._debug.unlockedControlPoints.arr = new Array(this.numUnlockedControlPoints);
      for (var i = 0; i < this.numUnlockedControlPoints; i++) {
        this._debug.unlockedControlPoints.arr[i] = { start: this._io.pos, ioOffset: this._io._byteOffset };
        var _t_unlockedControlPoints = new ControlPointData(this._io, this, this._root);
        _t_unlockedControlPoints._read();
        this.unlockedControlPoints[i] = _t_unlockedControlPoints;
        this._debug.unlockedControlPoints.arr[i].end = this._io.pos;
      }
      this._debug.unlockedControlPoints.end = this._io.pos;
      this._debug.gidLastUsedControlPoint = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.gidLastUsedControlPoint = this._io.readU8le();
      this._debug.gidLastUsedControlPoint.end = this._io.pos;
      this._debug.uiTagManagerObjectVersionU = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.uiTagManagerObjectVersionU = this._io.readU4le();
      this._debug.uiTagManagerObjectVersionU.end = this._io.pos;
      this._debug.uiTagManagerNumTags = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.uiTagManagerNumTags = this._io.readU4le();
      this._debug.uiTagManagerNumTags.end = this._io.pos;
      this._debug.uiTagManagerTags = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.uiTagManagerTags = new Array(this.uiTagManagerNumTags);
      this._debug.uiTagManagerTags.arr = new Array(this.uiTagManagerNumTags);
      for (var i = 0; i < this.uiTagManagerNumTags; i++) {
        this._debug.uiTagManagerTags.arr[i] = { start: this._io.pos, ioOffset: this._io._byteOffset };
        var _t_uiTagManagerTags = new UiTagManagerTag(this._io, this, this._root);
        _t_uiTagManagerTags._read();
        this.uiTagManagerTags[i] = _t_uiTagManagerTags;
        this._debug.uiTagManagerTags.arr[i].end = this._io.pos;
      }
      this._debug.uiTagManagerTags.end = this._io.pos;
      this._debug.progressionLevel = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.progressionLevel = new OspInt(this._io, this, this._root);
      this.progressionLevel._read();
      this._debug.progressionLevel.end = this._io.pos;
      this._debug.foundLocations = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.foundLocations = new GidArray(this._io, this, this._root);
      this.foundLocations._read();
      this._debug.foundLocations.end = this._io.pos;
      this._debug.gidCurrentLocation = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.gidCurrentLocation = this._io.readU8le();
      this._debug.gidCurrentLocation.end = this._io.pos;
      if (this.versionData.objectVersion >= 19) {
        this._debug.gidPreviousLocation = { start: this._io.pos, ioOffset: this._io._byteOffset };
        this.gidPreviousLocation = this._io.readU8le();
        this._debug.gidPreviousLocation.end = this._io.pos;
      }
      this._debug.abilityPointsSpent = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.abilityPointsSpent = this._io.readU4le();
      this._debug.abilityPointsSpent.end = this._io.pos;
      if (this.versionData.objectVersion >= 21) {
        this._debug.abilityPointsSpentHighWaterMark = { start: this._io.pos, ioOffset: this._io._byteOffset };
        this.abilityPointsSpentHighWaterMark = this._io.readU4le();
        this._debug.abilityPointsSpentHighWaterMark.end = this._io.pos;
      }
      this._debug.level = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.level = new OspInt(this._io, this, this._root);
      this.level._read();
      this._debug.level.end = this._io.pos;
      this._debug.abilityPointsTotal = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.abilityPointsTotal = new OspInt(this._io, this, this._root);
      this.abilityPointsTotal._read();
      this._debug.abilityPointsTotal.end = this._io.pos;
      this._debug.controlPointsUpgraded = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.controlPointsUpgraded = this._io.readU1();
      this._debug.controlPointsUpgraded.end = this._io.pos;
      if (this.versionData.objectVersion >= 20) {
        this._debug.pseven34843Patched = { start: this._io.pos, ioOffset: this._io._byteOffset };
        this.pseven34843Patched = this._io.readU1();
        this._debug.pseven34843Patched.end = this._io.pos;
      }
    }

    return PlayerProperties;
  })();

  /**
   * LootRollResult class
   */

  var TrialReward = ControlSave.TrialReward = (function() {
    function TrialReward(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    TrialReward.prototype._read = function() {
      this._debug.objectVersion = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.objectVersion = this._io.readU4le();
      this._debug.objectVersion.end = this._io.pos;
      this._debug.gidItem = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.gidItem = this._io.readU8le();
      this._debug.gidItem.end = this._io.pos;
      this._debug.parameter = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.parameter = this._io.readF4le();
      this._debug.parameter.end = this._io.pos;
    }

    return TrialReward;
  })();

  /**
   * ActiveItemIndices class
   */

  var GameInventoryActiveItemIndicies = ControlSave.GameInventoryActiveItemIndicies = (function() {
    function GameInventoryActiveItemIndicies(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    GameInventoryActiveItemIndicies.prototype._read = function() {
      this._debug.objectVersion = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.objectVersion = this._io.readU4le();
      this._debug.objectVersion.end = this._io.pos;
      this._debug.itemIndex = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.itemIndex = this._io.readU4le();
      this._debug.itemIndex.end = this._io.pos;
      this._debug.parentIndex = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.parentIndex = this._io.readS4le();
      this._debug.parentIndex.end = this._io.pos;
    }

    /**
     * -2 indicates player
     */

    return GameInventoryActiveItemIndicies;
  })();

  var MissionManager = ControlSave.MissionManager = (function() {
    function MissionManager(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    MissionManager.prototype._read = function() {
      this._debug.versionData = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.versionData = new VersionData(this._io, this, this._root);
      this.versionData._read();
      this._debug.versionData.end = this._io.pos;
      this._debug.numMissions = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.numMissions = this._io.readU4le();
      this._debug.numMissions.end = this._io.pos;
      this._debug.missions = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.missions = new Array(this.numMissions);
      this._debug.missions.arr = new Array(this.numMissions);
      for (var i = 0; i < this.numMissions; i++) {
        this._debug.missions.arr[i] = { start: this._io.pos, ioOffset: this._io._byteOffset };
        var _t_missions = new MissionManagerMission(this._io, this, this._root);
        _t_missions._read();
        this.missions[i] = _t_missions;
        this._debug.missions.arr[i].end = this._io.pos;
      }
      this._debug.missions.end = this._io.pos;
      this._debug.gidAlertMission = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.gidAlertMission = this._io.readU8le();
      this._debug.gidAlertMission.end = this._io.pos;
      this._debug.alertTimer = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.alertTimer = new GameTimer(this._io, this, this._root);
      this.alertTimer._read();
      this._debug.alertTimer.end = this._io.pos;
      this._debug.blockedAlertMissions = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.blockedAlertMissions = new GidArray(this._io, this, this._root);
      this.blockedAlertMissions._read();
      this._debug.blockedAlertMissions.end = this._io.pos;
    }

    return MissionManager;
  })();

  var MissionManagerMission = ControlSave.MissionManagerMission = (function() {
    function MissionManagerMission(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    MissionManagerMission.prototype._read = function() {
      this._debug.objectVersion = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.objectVersion = this._io.readU4le();
      this._debug.objectVersion.end = this._io.pos;
      this._debug.gidMissionId = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.gidMissionId = this._io.readU8le();
      this._debug.gidMissionId.end = this._io.pos;
      this._debug.numMissionSteps = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.numMissionSteps = this._io.readU4le();
      this._debug.numMissionSteps.end = this._io.pos;
      this._debug.missionSteps = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.missionSteps = new Array(this.numMissionSteps);
      this._debug.missionSteps.arr = new Array(this.numMissionSteps);
      for (var i = 0; i < this.numMissionSteps; i++) {
        this._debug.missionSteps.arr[i] = { start: this._io.pos, ioOffset: this._io._byteOffset };
        var _t_missionSteps = new MissionManagerMissionStep(this._io, this, this._root);
        _t_missionSteps._read();
        this.missionSteps[i] = _t_missionSteps;
        this._debug.missionSteps.arr[i].end = this._io.pos;
      }
      this._debug.missionSteps.end = this._io.pos;
      this._debug.missionState = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.missionState = this._io.readU4le();
      this._debug.missionState.end = this._io.pos;
      this._debug.isActive = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.isActive = this._io.readU1();
      this._debug.isActive.end = this._io.pos;
      this._debug.isAlert = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.isAlert = this._io.readU1();
      this._debug.isAlert.end = this._io.pos;
      this._debug.alertDuration = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.alertDuration = this._io.readF4le();
      this._debug.alertDuration.end = this._io.pos;
      this._debug.strOnCompleteCallback = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.strOnCompleteCallback = new StrType(this._io, this, this._root);
      this.strOnCompleteCallback._read();
      this._debug.strOnCompleteCallback.end = this._io.pos;
      this._debug.gidOnCompleteCallbackTarget = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.gidOnCompleteCallbackTarget = this._io.readU8le();
      this._debug.gidOnCompleteCallbackTarget.end = this._io.pos;
      this._debug.strOnAlertAppearedCallback = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.strOnAlertAppearedCallback = new StrType(this._io, this, this._root);
      this.strOnAlertAppearedCallback._read();
      this._debug.strOnAlertAppearedCallback.end = this._io.pos;
      this._debug.strOnAlertDisappearedCallback = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.strOnAlertDisappearedCallback = new StrType(this._io, this, this._root);
      this.strOnAlertDisappearedCallback._read();
      this._debug.strOnAlertDisappearedCallback.end = this._io.pos;
      this._debug.gidAlertCallbackTarget = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.gidAlertCallbackTarget = this._io.readU8le();
      this._debug.gidAlertCallbackTarget.end = this._io.pos;
    }

    return MissionManagerMission;
  })();

  var GameInventoryActivePersistingItem = ControlSave.GameInventoryActivePersistingItem = (function() {
    function GameInventoryActivePersistingItem(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    GameInventoryActivePersistingItem.prototype._read = function() {
      this._debug.gidItem = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.gidItem = this._io.readU8le();
      this._debug.gidItem.end = this._io.pos;
      this._debug.gidUnk = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.gidUnk = this._io.readU8le();
      this._debug.gidUnk.end = this._io.pos;
    }

    return GameInventoryActivePersistingItem;
  })();

  var TrialVec = ControlSave.TrialVec = (function() {
    function TrialVec(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    TrialVec.prototype._read = function() {
      this._debug.numItems = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.numItems = this._io.readU4le();
      this._debug.numItems.end = this._io.pos;
      this._debug.trials = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.trials = new Array(this.numItems);
      this._debug.trials.arr = new Array(this.numItems);
      for (var i = 0; i < this.numItems; i++) {
        this._debug.trials.arr[i] = { start: this._io.pos, ioOffset: this._io._byteOffset };
        var _t_trials = new TrialData(this._io, this, this._root);
        _t_trials._read();
        this.trials[i] = _t_trials;
        this._debug.trials.arr[i].end = this._io.pos;
      }
      this._debug.trials.end = this._io.pos;
    }

    return TrialVec;
  })();

  var OutfitData = ControlSave.OutfitData = (function() {
    function OutfitData(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    OutfitData.prototype._read = function() {
      this._debug.versionData = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.versionData = new VersionData(this._io, this, this._root);
      this.versionData._read();
      this._debug.versionData.end = this._io.pos;
      this._debug.currentOutfitId = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.currentOutfitId = this._io.readU4le();
      this._debug.currentOutfitId.end = this._io.pos;
      this._debug.scriptOverrideOutfitId = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.scriptOverrideOutfitId = this._io.readU4le();
      this._debug.scriptOverrideOutfitId.end = this._io.pos;
      this._debug.numOutfits = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.numOutfits = this._io.readU4le();
      this._debug.numOutfits.end = this._io.pos;
      this._debug.outfits = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.outfits = new Array(this.numOutfits);
      this._debug.outfits.arr = new Array(this.numOutfits);
      for (var i = 0; i < this.numOutfits; i++) {
        this._debug.outfits.arr[i] = { start: this._io.pos, ioOffset: this._io._byteOffset };
        var _t_outfits = new PlayerOutfitInfo(this._io, this, this._root);
        _t_outfits._read();
        this.outfits[i] = _t_outfits;
        this._debug.outfits.arr[i].end = this._io.pos;
      }
      this._debug.outfits.end = this._io.pos;
    }

    return OutfitData;
  })();

  /**
   * UITagManager::Tag class
   */

  var UiTagManagerTag = ControlSave.UiTagManagerTag = (function() {
    function UiTagManagerTag(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    UiTagManagerTag.prototype._read = function() {
      this._debug.objectVersion = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.objectVersion = this._io.readU4le();
      this._debug.objectVersion.end = this._io.pos;
      this._debug.id = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.id = this._io.readU8le();
      this._debug.id.end = this._io.pos;
      this._debug.tagValue = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.tagValue = this._io.readU4le();
      this._debug.tagValue.end = this._io.pos;
    }

    return UiTagManagerTag;
  })();

  var Header = ControlSave.Header = (function() {
    function Header(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    Header.prototype._read = function() {
      this._debug.versionData = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.versionData = this._io.ensureFixedContents([6, 0, 0, 0, 6, 0, 0, 0]);
      this._debug.versionData.end = this._io.pos;
      this._debug.checksumCrc32 = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.checksumCrc32 = this._io.readU4le();
      this._debug.checksumCrc32.end = this._io.pos;
      this._debug.filenameLen = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.filenameLen = this._io.readU4le();
      this._debug.filenameLen.end = this._io.pos;
      this._debug.filenameStr = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.filenameStr = KaitaiStream.bytesToStr(this._io.readBytes(this.filenameLen), "UTF-8");
      this._debug.filenameStr.end = this._io.pos;
      this._debug.scope = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.scope = this._io.readU1();
      this._debug.scope.end = this._io.pos;
      this._debug.unk3 = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.unk3 = this._io.readU4le();
      this._debug.unk3.end = this._io.pos;
      this._debug.numChunks = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.numChunks = this._io.readU4le();
      this._debug.numChunks.end = this._io.pos;
    }

    return Header;
  })();

  var GidArray = ControlSave.GidArray = (function() {
    function GidArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    GidArray.prototype._read = function() {
      this._debug.numItems = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.numItems = this._io.readU4le();
      this._debug.numItems.end = this._io.pos;
      this._debug.gid = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.gid = new Array(this.numItems);
      this._debug.gid.arr = new Array(this.numItems);
      for (var i = 0; i < this.numItems; i++) {
        this._debug.gid.arr[i] = { start: this._io.pos, ioOffset: this._io._byteOffset };
        this.gid[i] = this._io.readU8le();
        this._debug.gid.arr[i].end = this._io.pos;
      }
      this._debug.gid.end = this._io.pos;
    }

    return GidArray;
  })();

  /**
   * TrialData class
   */

  var TrialData = ControlSave.TrialData = (function() {
    function TrialData(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    TrialData.prototype._read = function() {
      this._debug.objectVersion = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.objectVersion = this._io.readU4le();
      this._debug.objectVersion.end = this._io.pos;
      this._debug.gid = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.gid = this._io.readU8le();
      this._debug.gid.end = this._io.pos;
      this._debug.currentProgress = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.currentProgress = this._io.readU4le();
      this._debug.currentProgress.end = this._io.pos;
      this._debug.numRewards = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.numRewards = this._io.readU4le();
      this._debug.numRewards.end = this._io.pos;
      this._debug.rewards = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.rewards = new Array(this.numRewards);
      this._debug.rewards.arr = new Array(this.numRewards);
      for (var i = 0; i < this.numRewards; i++) {
        this._debug.rewards.arr[i] = { start: this._io.pos, ioOffset: this._io._byteOffset };
        var _t_rewards = new TrialReward(this._io, this, this._root);
        _t_rewards._read();
        this.rewards[i] = _t_rewards;
        this._debug.rewards.arr[i].end = this._io.pos;
      }
      this._debug.rewards.end = this._io.pos;
    }

    return TrialData;
  })();

  /**
   * SaveData class
   */

  var GameInventory = ControlSave.GameInventory = (function() {
    function GameInventory(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    GameInventory.prototype._read = function() {
      this._debug.objectVersion = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.objectVersion = this._io.readU4le();
      this._debug.objectVersion.end = this._io.pos;
      this._debug.numItems = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.numItems = this._io.readU4le();
      this._debug.numItems.end = this._io.pos;
      this._debug.itemData = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.itemData = new Array(this.numItems);
      this._debug.itemData.arr = new Array(this.numItems);
      for (var i = 0; i < this.numItems; i++) {
        this._debug.itemData.arr[i] = { start: this._io.pos, ioOffset: this._io._byteOffset };
        var _t_itemData = new GameInventoryItemData(this._io, this, this._root);
        _t_itemData._read();
        this.itemData[i] = _t_itemData;
        this._debug.itemData.arr[i].end = this._io.pos;
      }
      this._debug.itemData.end = this._io.pos;
      this._debug.equippedWeaponIndex = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.equippedWeaponIndex = this._io.readU4le();
      this._debug.equippedWeaponIndex.end = this._io.pos;
      this._debug.numActivePersistingItems = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.numActivePersistingItems = this._io.readU4le();
      this._debug.numActivePersistingItems.end = this._io.pos;
      this._debug.activePersistingItems = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.activePersistingItems = new Array(this.numActivePersistingItems);
      this._debug.activePersistingItems.arr = new Array(this.numActivePersistingItems);
      for (var i = 0; i < this.numActivePersistingItems; i++) {
        this._debug.activePersistingItems.arr[i] = { start: this._io.pos, ioOffset: this._io._byteOffset };
        var _t_activePersistingItems = new GameInventoryActivePersistingItem(this._io, this, this._root);
        _t_activePersistingItems._read();
        this.activePersistingItems[i] = _t_activePersistingItems;
        this._debug.activePersistingItems.arr[i].end = this._io.pos;
      }
      this._debug.activePersistingItems.end = this._io.pos;
      this._debug.numActiveItems = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.numActiveItems = this._io.readU4le();
      this._debug.numActiveItems.end = this._io.pos;
      this._debug.activeItemData = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.activeItemData = new Array(this.numActiveItems);
      this._debug.activeItemData.arr = new Array(this.numActiveItems);
      for (var i = 0; i < this.numActiveItems; i++) {
        this._debug.activeItemData.arr[i] = { start: this._io.pos, ioOffset: this._io._byteOffset };
        var _t_activeItemData = new GameInventoryActiveItemIndicies(this._io, this, this._root);
        _t_activeItemData._read();
        this.activeItemData[i] = _t_activeItemData;
        this._debug.activeItemData.arr[i].end = this._io.pos;
      }
      this._debug.activeItemData.end = this._io.pos;
      if (this.objectVersion >= 4) {
        this._debug.pseven34843Patched = { start: this._io.pos, ioOffset: this._io._byteOffset };
        this.pseven34843Patched = this._io.readU1();
        this._debug.pseven34843Patched.end = this._io.pos;
      }
    }

    /**
     * unlocks and abilities
     */

    return GameInventory;
  })();

  var UnknownData = ControlSave.UnknownData = (function() {
    function UnknownData(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    UnknownData.prototype._read = function() {
      this._debug.versionData = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.versionData = new VersionData(this._io, this, this._root);
      this.versionData._read();
      this._debug.versionData.end = this._io.pos;
    }

    return UnknownData;
  })();

  /**
   * GameTimer class
   */

  var GameTimer = ControlSave.GameTimer = (function() {
    function GameTimer(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    GameTimer.prototype._read = function() {
      this._debug.objectVersion = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.objectVersion = this._io.readU4le();
      this._debug.objectVersion.end = this._io.pos;
      this._debug.timeLeft = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.timeLeft = this._io.readF4le();
      this._debug.timeLeft.end = this._io.pos;
      if (this.objectVersion >= 2) {
        this._debug.isPaused = { start: this._io.pos, ioOffset: this._io._byteOffset };
        this.isPaused = this._io.readU1();
        this._debug.isPaused.end = this._io.pos;
      }
    }

    return GameTimer;
  })();

  var PlayerTrials = ControlSave.PlayerTrials = (function() {
    function PlayerTrials(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    PlayerTrials.prototype._read = function() {
      this._debug.versionData = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.versionData = new VersionData(this._io, this, this._root);
      this.versionData._read();
      this._debug.versionData.end = this._io.pos;
      this._debug.activeTrials = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.activeTrials = new TrialVec(this._io, this, this._root);
      this.activeTrials._read();
      this._debug.activeTrials.end = this._io.pos;
      this._debug.selectableTrials = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.selectableTrials = new TrialVec(this._io, this, this._root);
      this.selectableTrials._read();
      this._debug.selectableTrials.end = this._io.pos;
      this._debug.completedTrials = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.completedTrials = new TrialVec(this._io, this, this._root);
      this.completedTrials._read();
      this._debug.completedTrials.end = this._io.pos;
      this._debug.potentialTrials = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.potentialTrials = new TrialVec(this._io, this, this._root);
      this.potentialTrials._read();
      this._debug.potentialTrials.end = this._io.pos;
      this._debug.allTrials = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.allTrials = new TrialVec(this._io, this, this._root);
      this.allTrials._read();
      this._debug.allTrials.end = this._io.pos;
      this._debug.availableWeaponArchetypes = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.availableWeaponArchetypes = new GidArray(this._io, this, this._root);
      this.availableWeaponArchetypes._read();
      this._debug.availableWeaponArchetypes.end = this._io.pos;
    }

    return PlayerTrials;
  })();

  /**
   * PlayerOutfitInfo class
   */

  var PlayerOutfitInfo = ControlSave.PlayerOutfitInfo = (function() {
    function PlayerOutfitInfo(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    PlayerOutfitInfo.prototype._read = function() {
      this._debug.objectVersion = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.objectVersion = this._io.ensureFixedContents([2, 0, 0, 0]);
      this._debug.objectVersion.end = this._io.pos;
      this._debug.outfitId = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.outfitId = this._io.readU4le();
      this._debug.outfitId.end = this._io.pos;
      this._debug.eStatus = { start: this._io.pos, ioOffset: this._io._byteOffset };
      this.eStatus = this._io.readU4le();
      this._debug.eStatus.end = this._io.pos;
    }

    return PlayerOutfitInfo;
  })();

  return ControlSave;
})();
return ControlSave;
}));
