package cso2.handler
{
   import cso2.manager.*;
   import cso2.ui.*;
   import flash.external.*;
   import scaleform.gfx.*;
   
   public class csoUICallHandler
   {
       
      
      public var callVector:Vector.<Object>;
      
      public function csoUICallHandler()
      {
         this.callVector = new Vector.<Object>();
         super();
      }
      
      public function callTodayQuestChangeMain() : void
      {
         ExternalInterface.call("todayquest.call.change.main");
      }
      
      public function callTodayQuestChangeRandom00() : void
      {
         ExternalInterface.call("todayquest.call.change.random.00");
      }
      
      public function callTodayQuestChangeRandom01() : void
      {
         ExternalInterface.call("todayquest.call.change.random.01");
      }
      
      public function callLobbyMouseRightDown() : void
      {
         ExternalInterface.call("mouse.call.rightdown");
      }
      
      public function callLobbyMouseWheelUp() : void
      {
         ExternalInterface.call("mouse.call.wheelup");
      }
      
      public function callLobbyMouseWheelDown() : void
      {
         ExternalInterface.call("mouse.call.wheeldown");
      }
      
      public function callPayCash() : void
      {
         ExternalInterface.call("cash.call.payment");
      }
      
      public function callClanMarkBGChange(param1:int) : void
      {
         ExternalInterface.call("clan.call.mark.bg",param1);
      }
      
      public function callClanMarkBGColorChange(param1:int) : void
      {
         ExternalInterface.call("clan.call.mark.bg.color",param1);
      }
      
      public function callClanMarkAccChange(param1:int) : void
      {
         ExternalInterface.call("clan.call.mark.acc",param1);
      }
      
      public function callClanMarkSymbolChange(param1:int) : void
      {
         ExternalInterface.call("clan.call.mark.symbol",param1);
      }
      
      public function callClanMarkChange(param1:int, param2:int, param3:int, param4:int) : void
      {
         ExternalInterface.call("clan.call.mark.change",param1,param2,param3,param4);
      }
      
      public function callHideSelectObject(param1:String) : void
      {
         ExternalInterface.call("hide.call.selectobject",param1);
      }
      
      public function callHideSelectObjectInputSpace() : void
      {
         ExternalInterface.call("hide.call.inputspace");
      }
      
      public function callQuickUserMode() : void
      {
         ExternalInterface.call("quick.call.userquickmode");
      }
      
      public function callQuickUserZombie() : void
      {
         ExternalInterface.call("quick.call.join.zombie");
      }
      
      public function callPromotionClick(param1:Object) : void
      {
         ExternalInterface.call("promotion.call.click",param1);
      }
      
      public function callQuickStart(param1:Object) : void
      {
         if(LobbyUserMatch.__this.app.simpleStartApp.userSimpleMatchStatus == 1)
         {
            trace("simple start on return !!!!!");
            return;
         }
         ExternalInterface.call("quick.call.start",param1);
      }
      
      public function callQuickStartEnterTypeEdit(param1:Boolean) : void
      {
         ExternalInterface.call("quick.call.edit.entertype",param1);
      }
      
      public function callQuickStartEdit(param1:Object) : void
      {
         ExternalInterface.call("quick.call.start.edit",param1);
      }
      
      public function callClanOpen() : void
      {
         ExternalInterface.call("clan.call.open");
      }
      
      public function callClanMake(param1:String) : void
      {
         ExternalInterface.call("clan.call.make",param1);
      }
      
      public function callClanMakeRegistIntro(param1:String, param2:Object) : void
      {
         ExternalInterface.call("clan.call.make.intro",param1,param2);
      }
      
      public function callClanMakeRegistIntroCancel() : void
      {
         ExternalInterface.call("clan.call.make.intro.cancel");
      }
      
      public function callClanQuit() : void
      {
         ExternalInterface.call("clan.call.quit");
      }
      
      public function callVoiceBlock(param1:String) : void
      {
         ExternalInterface.call("voiceblock.call.add",param1);
      }
      
      public function callVoiceBlockClear(param1:String) : void
      {
         ExternalInterface.call("voiceblock.call.clear",param1);
      }
      
      public function callBlock(param1:String) : void
      {
         ExternalInterface.call("block.call.add",param1);
      }
      
      public function callBlockClear(param1:String) : void
      {
         ExternalInterface.call("block.call.clear",param1);
      }
      
      public function callClanInfoContent() : void
      {
         ExternalInterface.call("clan.call.info.content");
      }
      
      public function callClanInviteUser(param1:String) : void
      {
         ExternalInterface.call("clan.call.invite.user",param1);
      }
      
      public function callClanMember() : void
      {
         ExternalInterface.call("clan.call.memberlist");
      }
      
      public function callClanMemberWait() : void
      {
         ExternalInterface.call("clan.call.waitmemberlist");
      }
      
      public function callClanMemberMemberInfo() : void
      {
         ExternalInterface.call("clan.call.memberinfo");
      }
      
      public function callClanMemberWaitMemberInfo() : void
      {
         ExternalInterface.call("clan.call.waitmemberinfo");
      }
      
      public function callClanManageContent() : void
      {
         ExternalInterface.call("clan.call.managecontent");
      }
      
      public function callClanMemberClass(param1:String) : void
      {
         ExternalInterface.call("clan.call.memberclass",param1);
      }
      
      public function callClanManageContentChangeRelease(param1:Object) : void
      {
         ExternalInterface.call("clan.call.managecontent.release.change",param1);
      }
      
      public function callClanManageContentChangeConfirm(param1:Object) : void
      {
         ExternalInterface.call("clan.call.managecontent.confirm.change",param1);
      }
      
      public function callClanManageContentChangeMemberRelease(param1:Object) : void
      {
         ExternalInterface.call("clan.call.managecontent.memberrelease.change",param1);
      }
      
      public function callClanManageContentChangeInvite(param1:Object) : void
      {
         ExternalInterface.call("clan.call.managecontent.invite.change",param1);
      }
      
      public function callClanManageContentChangeHistory(param1:Object) : void
      {
         ExternalInterface.call("clan.call.managecontent.history.change",param1);
      }
      
      public function callClanManageContentChangeExlie(param1:Object) : void
      {
         ExternalInterface.call("clan.call.managecontent.exile.change",param1);
      }
      
      public function callClanManageContentChangeLocation(param1:Object) : void
      {
         ExternalInterface.call("clan.call.managecontent.location.change",param1);
      }
      
      public function callClanManageNoticeChange(param1:String) : void
      {
         ExternalInterface.call("clan.call.managecontent.notice.change",param1);
      }
      
      public function callClanManageTalkChange(param1:String) : void
      {
         ExternalInterface.call("clan.call.managecontent.talk.change",param1);
      }
      
      public function callClanManageIntroChange(param1:String) : void
      {
         ExternalInterface.call("clan.call.managecontent.intro.change",param1);
      }
      
      public function callClanManageChangeComplete() : void
      {
         ExternalInterface.call("clan.call.managecontent.complete.change");
      }
      
      public function callClanManageDis() : void
      {
         ExternalInterface.call("clan.call.managecontent.dis");
      }
      
      public function callClanManageDisCancel() : void
      {
         ExternalInterface.call("clan.call.managecontent.dis.cancel");
      }
      
      public function callClanManageChangeMaster(param1:String) : void
      {
         ExternalInterface.call("clan.call.managecontent.change.master",param1);
      }
      
      public function callClanMemberAcceptAll(param1:String) : void
      {
         ExternalInterface.call("clan.call.member.accept.all",param1);
      }
      
      public function callClanMemberAccept(param1:Object, param2:String) : void
      {
         ExternalInterface.call("clan.call.member.accept",param1,param2);
      }
      
      public function callClanMemberRejectAll(param1:String) : void
      {
         ExternalInterface.call("clan.call.member.reject.all",param1);
      }
      
      public function callClanMemberReject(param1:Object, param2:String) : void
      {
         ExternalInterface.call("clan.call.member.reject",param1,param2);
      }
      
      public function callClanMemberClassChange(param1:Object, param2:int) : void
      {
         ExternalInterface.call("clan.call.member.classchange",param1,param2);
      }
      
      public function callClanMemberExile(param1:Object, param2:String) : void
      {
         ExternalInterface.call("clan.call.member.exile",param1,param2);
      }
      
      public function callClanMemberQuit(param1:String) : void
      {
         ExternalInterface.call("clan.call.member.quit",param1);
      }
      
      public function callClanList() : void
      {
         ExternalInterface.call("clan.call.clanlist");
      }
      
      public function callClanListPrev() : void
      {
         ExternalInterface.call("clan.call.clanlist.prev");
      }
      
      public function callClanListNext() : void
      {
         ExternalInterface.call("clan.call.clanlist.next");
      }
      
      public function callClanListSortJoin() : void
      {
         ExternalInterface.call("clan.call.clanlist.sort.join");
      }
      
      public function callClanJoin(param1:Object, param2:String) : void
      {
         ExternalInterface.call("clan.call.clan.join",param1,param2);
      }
      
      public function callClanJoinCancel(param1:Object) : void
      {
         ExternalInterface.call("clan.call.clan.join.cancel",param1);
      }
      
      public function callClanBoardWrite(param1:String) : void
      {
         ExternalInterface.call("clan.call.board.write",param1);
      }
      
      public function callClanBoardDel(param1:Object) : void
      {
         ExternalInterface.call("clan.call.board.del",param1);
      }
      
      public function callClanSearch(param1:String) : void
      {
         ExternalInterface.call("clan.call.search",param1);
      }
      
      public function callClanMatchSearch(param1:String) : void
      {
         ExternalInterface.call("claninvite.call.search",param1);
      }
      
      public function callClanMatchInvite(param1:String, param2:String) : void
      {
         ExternalInterface.call("claninvite.call.invite",param1,param2);
      }
      
      public function callUserInfo() : void
      {
         ExternalInterface.call("userinfo.call.contents");
      }
      
      public function callAchIngamePopupClose() : void
      {
         ExternalInterface.call("ach.call.ingame.popupclose");
      }
      
      public function callAchInfoData() : void
      {
         ExternalInterface.call("ach.call.data.info");
      }
      
      public function callRankInfoData() : void
      {
         ExternalInterface.call("rank.call.data");
      }
      
      public function callRankInfoDataDetail(param1:String) : void
      {
         ExternalInterface.call("rank.call.data.detail",param1);
      }
      
      public function callAchListData(param1:String) : void
      {
         ExternalInterface.call("ach.call.data.list",param1);
      }
      
      public function callMasteryCharacterContent() : void
      {
         ExternalInterface.call("mastery.call.cha.contents");
      }
      
      public function callMasteryWeaponContent() : void
      {
         ExternalInterface.call("mastery.call.weapon.contents");
      }
      
      public function callMasterySkillContent() : void
      {
         ExternalInterface.call("mastery.call.skill.contents");
      }
      
      public function callMasterySkillNormalList() : void
      {
         ExternalInterface.call("mastery.call.skill.normal.list");
      }
      
      public function callMasterySkillSpecialList() : void
      {
         ExternalInterface.call("mastery.call.skill.special.list");
      }
      
      public function callMasterySKillLearn(param1:Object) : void
      {
         ExternalInterface.call("mastery.call.skill.learn",param1);
      }
      
      public function callMasterySKillReset(param1:Object) : void
      {
         ExternalInterface.call("mastery.call.skill.reset",param1);
      }
      
      public function callMasterySKillUpgrade(param1:Object) : void
      {
         ExternalInterface.call("mastery.call.skill.upgrade",param1);
      }
      
      public function callMasterySkillAllReset() : void
      {
         ExternalInterface.call("mastery.call.skill.allreset");
      }
      
      public function callMasteryOutline() : void
      {
         ExternalInterface.call("mastery.call.outlinie");
      }
      
      public function callBotSetting(param1:int, param2:Number, param3:Number) : void
      {
         ExternalInterface.call("bot.setting",param1,param2,param3);
      }
      
      public function callBotUse(param1:Boolean) : void
      {
         ExternalInterface.call("bot.use",param1);
      }
      
      public function callBotNum(param1:Number, param2:Number) : void
      {
         ExternalInterface.call("bot.num",param1,param2);
      }
      
      public function callBotDif(param1:Number) : void
      {
         ExternalInterface.call("bot.dif",param1);
      }
      
      public function callTeamCT() : void
      {
         ExternalInterface.call("team.view.ct");
      }
      
      public function callTeamTR() : void
      {
         ExternalInterface.call("team.view.tr");
      }
      
      public function callMiniprofileEditToday(param1:String) : void
      {
         ExternalInterface.call("user.call.edit.today",param1);
      }
      
      public function callGroupAdd(param1:String, param2:Array) : void
      {
         ExternalInterface.call("userpopup.call.group.add",param1,param2);
      }
      
      public function callGroupNameEdit(param1:String, param2:String) : void
      {
         ExternalInterface.call("userpopup.call.group.name.edit",param1,param2);
      }
      
      public function callGroupDel(param1:Object) : void
      {
         ExternalInterface.call("userpopup.call.group.del",param1);
      }
      
      public function callUserPopupAddFriend(param1:String) : void
      {
         ExternalInterface.call("userpopup.call.friend.add",param1);
      }
      
      public function callUserPopupLateFriend(param1:String) : void
      {
         ExternalInterface.call("userpopup.call.friend.late",param1);
      }
      
      public function callUserOptionListOpen() : void
      {
         ExternalInterface.call("user.call.userlist.open");
      }
      
      public function callUserOptionListClose() : void
      {
         ExternalInterface.call("user.call.userlist.close");
      }
      
      public function callUserVoiceChatEnable(param1:String) : void
      {
         ExternalInterface.call("user.call.voicechat",param1);
      }
      
      public function callUserPopupDelFriend(param1:String) : void
      {
         ExternalInterface.call("userpopup.call.friend.del",param1);
      }
      
      public function callUserPopupFollow(param1:Object) : void
      {
         ExternalInterface.call("userpopup.call.follow",param1);
      }
      
      public function callUserPopupInvite(param1:Object) : void
      {
         ExternalInterface.call("userpopup.call.invite",param1,systemManager.activeMessengerIndex);
      }
      
      public function callUserPopupInviteAccept(param1:String) : void
      {
         ExternalInterface.call("userpopup.call.invite.accept",param1);
      }
      
      public function callUserPopupInviteReject(param1:String) : void
      {
         ExternalInterface.call("userpopup.call.invite.reject",param1);
      }
      
      public function callUserPopupAcceptAddFriend(param1:String) : void
      {
         ExternalInterface.call("userpopup.call.friend.accept",param1);
      }
      
      public function callUserPopupReject(param1:String) : void
      {
         ExternalInterface.call("userpopup.call.friend.reject",param1);
      }
      
      public function callMessengerUserClick(param1:Object) : void
      {
         ExternalInterface.call("messenger.call.user.click",param1);
      }
      
      public function callMessengerOpen() : void
      {
         ExternalInterface.call("messenger.call.open");
      }
      
      public function callMessengerClose() : void
      {
         ExternalInterface.call("messenger.call.close");
      }
      
      public function callMessengerFriendGroupMove(param1:Object, param2:Object) : void
      {
         if(param1.name != null && param1.treeid != null && param2.treeid != null)
         {
         }
         ExternalInterface.call("messenger.call.group.move",param1,param2);
      }
      
      public function callAlert(param1:Boolean) : void
      {
         if(param1)
         {
            ExternalInterface.call("alert.ok");
         }
         else
         {
            ExternalInterface.call("alert.cancel");
         }
      }
      
      public function callTutoPlay() : void
      {
         ExternalInterface.call("tuto.play");
      }
      
      public function callLobbyTuto000() : void
      {
         ExternalInterface.call("tuto.call.unlock.ak47.complete");
      }
      
      public function callLobbyTuto001() : void
      {
         ExternalInterface.call("tuto.call.unlock.m4a1.complete");
      }
      
      public function callLobbyTutoServerStep() : void
      {
         ExternalInterface.call("tuto.call.server.complete");
      }
      
      public function callAlarmOpen() : void
      {
         ExternalInterface.call("alarm.call.open");
      }
      
      public function callAlarmClose() : void
      {
         ExternalInterface.call("alarm.call.close");
      }
      
      public function callAlarmListListData(param1:String) : void
      {
         ExternalInterface.call("alarm.call.list.data",param1);
      }
      
      public function callAlarmListClick(param1:Object) : void
      {
         ExternalInterface.call("alarm.call.click",param1);
      }
      
      public function callAlarmAccept(param1:String) : void
      {
         ExternalInterface.call("alarm.call.accept",param1);
      }
      
      public function callAlarmReject(param1:String) : void
      {
         ExternalInterface.call("alarm.call.reject",param1);
      }
      
      public function callAlarmDetail(param1:Object) : void
      {
         ExternalInterface.call("alarm.call.detail",param1);
      }
      
      public function callAlarmDel(param1:String) : void
      {
         ExternalInterface.call("alarm.call.del",param1);
      }
      
      public function callAlarmListOKClick(param1:Object) : void
      {
         ExternalInterface.call("alarm.call.list.ok",param1);
      }
      
      public function callAlarmListCancelClick(param1:Object) : void
      {
         ExternalInterface.call("alarm.call.list.cancel",param1);
      }
      
      public function callAlarmListDelClick(param1:Object) : void
      {
         ExternalInterface.call("alarm.call.list.del",param1);
      }
      
      public function callAlarmListScrollMax() : void
      {
         ExternalInterface.call("alarm.call.list.scrollmax");
      }
      
      public function callChat(param1:int, param2:String, param3:String = "") : void
      {
         ExternalInterface.call("chat.input",param1,param2,param3);
      }
      
      public function callShopBuyPopup(param1:Object) : void
      {
         ExternalInterface.call("shop.popup.open",param1);
      }
      
      public function callShopBuyPopupIngame(param1:Object) : void
      {
         ExternalInterface.call("inventory.item.repurchase.ingame",param1);
      }
      
      public function callShopGiftPopup(param1:Object) : void
      {
         ExternalInterface.call("shop.popup.gift.open",param1);
      }
      
      public function callShopBuyOptionChange(param1:Object) : void
      {
         ExternalInterface.call("shop.popup.option.change",param1);
      }
      
      public function callShopBuy(param1:Object, param2:Object, param3:Boolean = false, param4:Boolean = false) : void
      {
         ExternalInterface.call("shop.buy",param1,param3,param4);
      }
      
      public function callShopGift(param1:Object, param2:Object, param3:String) : void
      {
         ExternalInterface.call("shop.gift",param1,param3);
      }
      
      public function callShopOpen() : void
      {
         ExternalInterface.call("shop.open");
      }
      
      public function callShopClose() : void
      {
         ExternalInterface.call("shop.close");
      }
      
      public function callInventoryDel(param1:Object) : void
      {
         ExternalInterface.call("inventory.item.del",param1);
      }
      
      public function callInventoryDelIngame(param1:Object) : void
      {
         ExternalInterface.call("inventory.item.del.ingame",param1);
      }
      
      public function callInventoryReperchase(param1:Object) : void
      {
         ExternalInterface.call("inventory.item.repurchase",param1);
      }
      
      public function callInventoryUseItem(param1:Object) : void
      {
         ExternalInterface.call("inventory.item.use",param1);
      }
      
      public function callInventoryUseItemIngame(param1:Object) : void
      {
         ExternalInterface.call("inventory.item.use.ingame",param1);
      }
      
      public function callInventoryBuyDecide(param1:Object) : void
      {
         ExternalInterface.call("inventory.buydecide",param1);
      }
      
      public function callInventoryBuyRefund(param1:Object) : void
      {
         ExternalInterface.call("inventory.buyrefund",param1);
      }
      
      public function callInventoryEquipTab(param1:int) : void
      {
         ExternalInterface.call("inventory.equip.update",param1);
      }
      
      public function callInventoryEquipOut(param1:int, param2:Object) : void
      {
         ExternalInterface.call("inventory.equip.out",param1,param2);
      }
      
      public function callInventoryOpen() : void
      {
         ExternalInterface.call("inventory.open");
      }
      
      public function callInventoryClose() : void
      {
         ExternalInterface.call("inventory.close");
      }
      
      public function callInventorySelect(param1:Object) : void
      {
         ExternalInterface.call("inventory.list.select",param1);
      }
      
      public function callInventoryEquip(param1:Object) : void
      {
         ExternalInterface.call("inventory.list.equip",param1);
      }
      
      public function callInventorySearchDB(param1:Object) : void
      {
         ExternalInterface.call("datatable.query",param1);
      }
      
      public function callInventoryBigmallOpen() : void
      {
         ExternalInterface.call("shop.call.bigmall.open");
      }
      
      public function callInventoryBigmallClose() : void
      {
         ExternalInterface.call("shop.call.bigmall.close");
      }
      
      public function callIngameShopBuy(param1:Object) : void
      {
         ExternalInterface.call("buyweapon.call.shop.buy",param1);
      }
      
      public function callIngameInventoryEquipTab(param1:int) : void
      {
         ExternalInterface.call("buyweapon.equip.update",param1);
      }
      
      public function callIngameInventoryEquipItemOut(param1:int, param2:Object) : void
      {
         ExternalInterface.call("buyweapon.equip.out",param1,param2);
      }
      
      public function callIngameInventoryEquipItemInput(param1:int, param2:int, param3:Object) : void
      {
         ExternalInterface.call("buyweapon.equip.inputitem",param1,param2,param3);
      }
      
      public function callResultOK() : void
      {
         ExternalInterface.call("result.ok");
      }
      
      public function callResultMapCancel() : void
      {
         ExternalInterface.call("result.call.map.cancel");
      }
      
      public function callBuyweaponClose() : void
      {
         ExternalInterface.call("buyweapon.close");
      }
      
      public function callBuyweaponVisible(param1:Boolean) : void
      {
         ExternalInterface.call("buyweapon.visible",param1);
      }
      
      public function callBuyweaponBuy(param1:Object) : void
      {
         ExternalInterface.call("buyweapon.weapon.buy",param1);
      }
      
      public function callBuyweaponAuto() : void
      {
         ExternalInterface.call("buyweapon.buy.auto");
      }
      
      public function callBuyweaponRe() : void
      {
         ExternalInterface.call("buyweapon.buy.re");
      }
      
      public function callFocusMouse(param1:Boolean = true) : void
      {
         var _loc2_:Boolean = param1;
         ExternalInterface.call("system.focus.mouse",_loc2_);
      }
      
      public function callFocusComplete() : void
      {
         if(systemManager.handlerState.activeState == systemManager.handlerState.STATE_INGAME_PLAY || systemManager.handlerState.activeState == systemManager.handlerState.STATE_INGAME_MODE_DEATHMATCH_PLAY || systemManager.handlerState.activeState == systemManager.handlerState.STATE_INGAME_MODE_GUNTEAMDEATH_PLAY)
         {
            systemManager.handlerCall.callFocusMouse(false);
            systemManager.handlerCall.callFocusKeyboard(false);
            systemManager.handleFocus.activeKeyboardFocus = false;
            systemManager.handleFocus.activeMouseFocus = false;
            if(systemManager.buyActive)
            {
               systemManager.handlerCall.callFocusMouse(true);
               systemManager.handlerCall.callFocusKeyboard(true);
               systemManager.handleFocus.activeKeyboardFocus = true;
               systemManager.handleFocus.activeMouseFocus = true;
            }
            if(systemManager.optionActive)
            {
               systemManager.handlerCall.callFocusMouse(true);
               systemManager.handlerCall.callFocusKeyboard(true);
               systemManager.handleFocus.activeKeyboardFocus = true;
               systemManager.handleFocus.activeMouseFocus = true;
            }
            if(HUD_Chat.__this.app.chatInputFocusEnable)
            {
               systemManager.handlerCall.callFocusMouse(true);
               systemManager.handlerCall.callFocusKeyboard(true);
               systemManager.handleFocus.activeKeyboardFocus = true;
               systemManager.handleFocus.activeMouseFocus = true;
               FocusManager.setFocus(null);
               FocusManager.setFocus(HUD_Chat.__this.app.inputChat.textField);
            }
            if(systemManager.alertActive)
            {
               systemManager.handlerCall.callFocusMouse(true);
               systemManager.handlerCall.callFocusKeyboard(true);
               systemManager.handleFocus.activeKeyboardFocus = true;
               systemManager.handleFocus.activeMouseFocus = true;
            }
            if(HUDModeHide.__this.app.visible)
            {
               systemManager.handlerCall.callFocusMouse(true);
               systemManager.handlerCall.callFocusKeyboard(true);
               systemManager.handleFocus.activeKeyboardFocus = true;
               systemManager.handleFocus.activeMouseFocus = true;
            }
         }
      }
      
      public function callFocusKeyboard(param1:Boolean = true) : void
      {
         var _loc2_:Boolean = param1;
         ExternalInterface.call("system.focus.keyboard",_loc2_);
      }
      
      public function callSystemOtherView(param1:String) : void
      {
         ExternalInterface.call("system.other.view",param1);
      }
      
      public function callSystemOtherWhisper(param1:String) : void
      {
         ExternalInterface.call("system.other.whisper",param1);
      }
      
      public function callSystemOtherAdd(param1:String) : void
      {
         ExternalInterface.call("system.other.add",param1);
      }
      
      public function callSystemOtherOut(param1:String) : void
      {
         ExternalInterface.call("system.other.out",param1);
      }
      
      public function callSystemOtherAddClan(param1:String) : void
      {
         ExternalInterface.call("system.other.addclan",param1);
      }
      
      public function callSystemOtherViewResult(param1:String) : void
      {
         ExternalInterface.call("system.other.view.result",param1);
      }
      
      public function callSystemOtherViewDetail(param1:String) : void
      {
         ExternalInterface.call("system.other.view.detail",param1);
      }
      
      public function callSystemOtherMaster(param1:String) : void
      {
         ExternalInterface.call("system.other.master",param1);
      }
      
      public function callSoundPlay(param1:String) : void
      {
         ExternalInterface.call("Sound.play",param1);
      }
      
      public function callSoundStop(param1:String) : void
      {
         ExternalInterface.call("Sound.stop",param1);
      }
      
      public function callSoundPlayBGM(param1:String) : void
      {
         ExternalInterface.call("Sound.playRepeat",param1,true,false);
      }
      
      public function callSoundPlayLoop(param1:String) : void
      {
         ExternalInterface.call("Sound.playRepeat",param1,false,false);
      }
      
      public function callSoundStopLoop(param1:String) : void
      {
         ExternalInterface.call("Sound.stopRepeat",param1);
      }
      
      public function callChannelOut() : void
      {
         ExternalInterface.call("channel.out");
      }
      
      public function callJoinRoomOut() : void
      {
         ExternalInterface.call("room.out");
      }
      
      public function needCallRoomList() : void
      {
         ExternalInterface.call("need.roomlist");
      }
      
      public function needCallRoomInfo() : void
      {
         ExternalInterface.call("need.waiting.roominfo");
      }
      
      public function needCallUserUpdate() : void
      {
         ExternalInterface.call("need.user.update");
      }
      
      public function callJoinRoomReadyButtonClick() : void
      {
         ExternalInterface.call("room.user.ready.click");
      }
      
      public function callJoinRoomChangeTeam() : void
      {
         ExternalInterface.call("room.change.team");
      }
      
      public function callJoinRoomKickUser(param1:Object) : void
      {
         ExternalInterface.call("room.kick.user",param1);
      }
      
      public function callJoinRoomChangeRoomTitle(param1:String) : void
      {
         ExternalInterface.call("room.change.title",param1);
      }
      
      public function callJoinRoomChangePass(param1:String) : void
      {
         ExternalInterface.call("room.change.pass",param1);
      }
      
      public function callJoinRoomChangeRound(param1:Object) : void
      {
         ExternalInterface.call("room.change.roundnum",param1);
      }
      
      public function callJoinRoomChangeRoundOption(param1:Object) : void
      {
         ExternalInterface.call("room.change.roundnum.option",param1);
      }
      
      public function callJoinRoomChangeMoney(param1:Object) : void
      {
         ExternalInterface.call("room.change.money",param1);
      }
      
      public function callJoinRoomChangeTeamChange(param1:Object) : void
      {
         ExternalInterface.call("room.change.teamchange",param1);
      }
      
      public function callJoinRoomChangeView(param1:Object) : void
      {
         ExternalInterface.call("room.change.view",param1);
      }
      
      public function callJoinRoomChangeBalance(param1:Object) : void
      {
         ExternalInterface.call("room.change.balance",param1);
      }
      
      public function callJoinRoomChangeBotCheck(param1:Boolean) : void
      {
         ExternalInterface.call("room.change.bot.check",param1);
      }
      
      public function callJoinRoomChangeBotLevel(param1:Object) : void
      {
         ExternalInterface.call("room.change.bot.level",param1);
      }
      
      public function callJoinRoomChangeBotCT(param1:int) : void
      {
         ExternalInterface.call("room.change.bot.ct",param1);
      }
      
      public function callJoinRoomChangeBotTR(param1:int) : void
      {
         ExternalInterface.call("room.change.bot.tr",param1);
      }
      
      public function callJoinRoomChangeKill(param1:Object) : void
      {
         ExternalInterface.call("room.change.killnum",param1);
      }
      
      public function callJoinRoomChangeUser(param1:Object) : void
      {
         ExternalInterface.call("room.change.usernum",param1);
      }
      
      public function callJoinRoomChangeWatching(param1:int) : void
      {
         ExternalInterface.call("room.change.watching",param1);
      }
      
      public function callJoinRoomChangeTeambalance(param1:int) : void
      {
         ExternalInterface.call("room.change.teambalance",param1);
      }
      
      public function callJoinRoomChangeWeaponlimit(param1:Object) : void
      {
         ExternalInterface.call("room.change.weaponlimit",param1);
      }
      
      public function callJoinRoomChangeKillDeath(param1:int) : void
      {
         ExternalInterface.call("room.change.killdeath",param1);
      }
      
      public function callJoinRoomChangeDetailOption(param1:Object, param2:Object) : void
      {
         ExternalInterface.call("room.change.detailoption",param1,param2);
      }
      
      public function callJoinRoomChangeBot(param1:int) : void
      {
         ExternalInterface.call("room.change.bot",param1);
      }
      
      public function callJoinRoomChangeMode(param1:String) : void
      {
         ExternalInterface.call("room.change.mod",param1);
      }
      
      public function callJoinRoomChangeMap(param1:String) : void
      {
         ExternalInterface.call("room.change.map",param1);
      }
      
      public function callJoinRoomChangeMapType(param1:int) : void
      {
         ExternalInterface.call("room.change.map.type",param1);
      }
      
      public function callJoinRoomChangeMapList(param1:Array) : void
      {
         ExternalInterface.call("room.change.map.list",param1);
      }
      
      public function callJoinRoomChangeMapRandomNum(param1:int) : void
      {
         ExternalInterface.call("room.change.map.random.num",param1);
      }
      
      public function callRoomSelectQuick() : void
      {
         ExternalInterface.call("room.enter.quick");
      }
      
      public function callRoomSelect(param1:Object, param2:String = "") : void
      {
         systemManager.debugTrace(" 방 진입시도 방이름은 " + param1.roomTitle + " 입력한 비번은 " + param2);
         ExternalInterface.call("room.enter",param1,param2);
      }
      
      public function callRoomMake(param1:String, param2:String, param3:String) : void
      {
         ExternalInterface.call("room.make",param1,param2,param3);
      }
      
      public function callChannelSelectQuick() : void
      {
         ExternalInterface.call("channel.select.quick");
      }
      
      public function callChannelSelect(param1:Object) : void
      {
         ExternalInterface.call("channel.select",param1);
      }
      
      public function callBigcityEnter(param1:Object, param2:Object) : void
      {
         ExternalInterface.call("gz.call.enter",param1,param2);
      }
      
      public function callBigcityAutoEnter(param1:Object) : void
      {
         ExternalInterface.call("gz.call.autoEnter",param1);
      }
      
      public function callBigCityChaList() : void
      {
         ExternalInterface.call("gz.call.cha");
      }
      
      public function callBigCityChaListSelect(param1:Object) : void
      {
         ExternalInterface.call("gz.call.cha.select",param1);
      }
      
      public function callBigCityServerList() : void
      {
         ExternalInterface.call("gz.call.server");
      }
      
      public function callBigCityDelCha(param1:Object) : void
      {
         ExternalInterface.call("gz.call.cha.del",param1);
      }
      
      public function callBigCitySelectCha(param1:Object) : void
      {
         ExternalInterface.call("gz.call.cha.select",param1);
      }
      
      public function callBigCityServerReload() : void
      {
         ExternalInterface.call("gz.call.server.reload");
      }
      
      public function callBigCitySaveCha(param1:Object, param2:Object) : void
      {
         ExternalInterface.call("gz.call.cha.save",param1,param2);
      }
      
      public function callBigCityResultClose() : void
      {
         ExternalInterface.call("bigcity.call.result.close");
      }
      
      public function needCallServerList() : void
      {
         ExternalInterface.call("need.serverlist");
      }
      
      public function callConsoleClose() : void
      {
      }
      
      public function registCallObj(param1:String, param2:String, param3:String = "") : void
      {
         var _loc4_:Object;
         (_loc4_ = new Object()).type = param1;
         _loc4_.name = param2;
         _loc4_.ex = param3;
         this.callVector.push(_loc4_);
      }
      
      public function callConsoleInput(param1:String) : void
      {
         ExternalInterface.call("console.call",param1);
      }
      
      public function callLogin(param1:String, param2:String) : void
      {
         ExternalInterface.call("login.try",param1,param2);
      }
      
      public function callMakeNickName(param1:String) : void
      {
         ExternalInterface.call("nickname.make",param1);
      }
      
      public function callMakeNickNameConfirm(param1:String) : void
      {
         ExternalInterface.call("nickname.make.confirm",param1);
      }
      
      public function callChangeNickName(param1:String) : void
      {
         ExternalInterface.call("nick.change.call",param1);
      }
      
      public function callChangeNickNameCancel() : void
      {
         ExternalInterface.call("nick.change.call.cancel");
      }
      
      public function callChangeNickNameConfirm(param1:String) : void
      {
         ExternalInterface.call("nick.change.call.confirm",param1);
      }
      
      public function callServerSelect(param1:Object) : void
      {
         ExternalInterface.call("server.select",param1);
      }
      
      public function callOptionClose() : void
      {
         ExternalInterface.call("option.close");
      }
      
      public function callOptionClickOK() : void
      {
         ExternalInterface.call("option.call.click.ok");
      }
      
      public function callOptioinClickCancel() : void
      {
         ExternalInterface.call("option.call.click.cancel");
      }
      
      public function callOptionReset(param1:int) : void
      {
         ExternalInterface.call("option.reset",param1);
      }
      
      public function callOptionResetAll() : void
      {
         ExternalInterface.call("option.reset.all");
      }
      
      public function callOptionBasicReset() : void
      {
         ExternalInterface.call("option.call.basic.reset");
      }
      
      public function callOptionBasic() : void
      {
         ExternalInterface.call("option.call.basic");
      }
      
      public function callOptionRadioValueChange(param1:Boolean) : void
      {
         ExternalInterface.call("option.change.basic.radio",param1);
      }
      
      public function callOptionAimIffValueChange(param1:Boolean) : void
      {
         ExternalInterface.call("option.change.basic.aim.iff",param1);
      }
      
      public function callOptionWhisperValueChange(param1:Object) : void
      {
         ExternalInterface.call("option.change.basic.whisper",param1);
      }
      
      public function callOptionInviteValueChange(param1:Object) : void
      {
         ExternalInterface.call("option.change.basic.invite",param1);
      }
      
      public function callOptionBattleboardValueChange(param1:Object) : void
      {
         ExternalInterface.call("option.change.basic.battleboard",param1);
      }
      
      public function callOptionFullValueChange(param1:Boolean) : void
      {
         ExternalInterface.call("option.change.basic.full",param1);
      }
      
      public function callOptionHelpValueChange(param1:Boolean) : void
      {
         ExternalInterface.call("option.change.basic.help",param1);
      }
      
      public function callOptionMapNameValueChange(param1:Boolean) : void
      {
         ExternalInterface.call("option.change.basic.mapname",param1);
      }
      
      public function callOptionBasicDataAimValueChange(param1:Number) : void
      {
         ExternalInterface.call("option.change.basic.aimvalue",param1);
      }
      
      public function callOptionBasicDataUIScaleValueChange(param1:Number) : void
      {
         ExternalInterface.call("option.change.basic.uiscale",param1);
      }
      
      public function callOptionBasicDataNaviChange(param1:Boolean) : void
      {
         ExternalInterface.call("option.change.basic.navi",param1);
      }
      
      public function callOptionBasicDataRaiderChange(param1:Boolean) : void
      {
         ExternalInterface.call("option.change.basic.raider",param1);
      }
      
      public function callOptionBasicDataWeaponChange(param1:Boolean) : void
      {
         ExternalInterface.call("option.change.basic.weapon",param1);
      }
      
      public function callOptionBasicDataFrizecamChange(param1:Boolean) : void
      {
         ExternalInterface.call("option.change.basic.freezecam",param1);
      }
      
      public function callOptionBasicDataNameCenterChange(param1:Boolean) : void
      {
         ExternalInterface.call("option.change.basic.namecenter",param1);
      }
      
      public function callOptionBasicDataHitEffectChange(param1:Boolean) : void
      {
         ExternalInterface.call("option.change.basic.hiteffect",param1);
      }
      
      public function callOptionBasicDataFrameChange(param1:Boolean) : void
      {
         ExternalInterface.call("option.change.basic.frame",param1);
      }
      
      public function callOptionBasicDataLeftHand(param1:Boolean) : void
      {
         ExternalInterface.call("option.change.basic.lefthand",param1);
      }
      
      public function callOptionBasicDataDynamicAim(param1:Boolean) : void
      {
         ExternalInterface.call("option.change.basic.dynamicaim",param1);
      }
      
      public function callOptionBasicDataHitView(param1:Boolean) : void
      {
         ExternalInterface.call("option.change.basic.hitview",param1);
      }
      
      public function callOptionBasicDataSpot(param1:Boolean) : void
      {
         ExternalInterface.call("option.change.basic.spot",param1);
      }
      
      public function callOptionMouse() : void
      {
         ExternalInterface.call("option.call.mouse");
      }
      
      public function callOptionMouseVerticalChange(param1:Boolean) : void
      {
         ExternalInterface.call("option.change.mouse.vertical",param1);
      }
      
      public function callOptionMouseFilterChange(param1:Boolean) : void
      {
         ExternalInterface.call("option.change.mouse.filter",param1);
      }
      
      public function callOptionMouseSansiChange(param1:Number) : void
      {
         ExternalInterface.call("option.change.mouse.sansi",param1);
      }
      
      public function callOptionMouseSniferChange(param1:Number) : void
      {
         ExternalInterface.call("option.change.mouse.snifer",param1);
      }
      
      public function callOptionMouseRawChange(param1:Boolean) : void
      {
         ExternalInterface.call("option.change.mouse.raw",param1);
      }
      
      public function callOptionMouseAccChange(param1:Number) : void
      {
         ExternalInterface.call("option.change.mouse.acc",param1);
      }
      
      public function callOptionKeyboard() : void
      {
         ExternalInterface.call("option.call.keyboard");
      }
      
      public function callOptionKeyboard02() : void
      {
         ExternalInterface.call("option.call.keyboard02");
      }
      
      public function callOptionKeyboardChange(param1:String, param2:Number) : void
      {
         ExternalInterface.call("option.change.keyboard",param1,param2);
      }
      
      public function callOptionKeyboardChange02(param1:String, param2:Number) : void
      {
         ExternalInterface.call("option.change.keyboard02",param1,param2);
      }
      
      public function callOptionGraphic() : void
      {
         ExternalInterface.call("option.call.graphic");
      }
      
      public function callOptionGraphicAutoPreset(param1:Boolean) : void
      {
         ExternalInterface.call("option.call.graphic.autopreset",param1);
      }
      
      public function callOptionGraphicRatioChange(param1:Object) : void
      {
         ExternalInterface.call("option.change.graphic.ratio",param1);
      }
      
      public function callOptionGraphicResolutionChange(param1:Object) : void
      {
         ExternalInterface.call("option.change.graphic.resolution",param1);
      }
      
      public function callOptionGraphicModeChange(param1:Object) : void
      {
         ExternalInterface.call("option.change.graphic.mode",param1);
      }
      
      public function callOptionGraphicModeChangeInstant(param1:Object) : void
      {
         ExternalInterface.call("option.change.graphic.mode.instant",param1);
      }
      
      public function callOptionGraphicModelChange(param1:Object) : void
      {
         ExternalInterface.call("option.change.graphic.model",param1);
      }
      
      public function callOptionGraphicTextureChange(param1:Object) : void
      {
         ExternalInterface.call("option.change.graphic.texture",param1);
      }
      
      public function callOptionGraphicShaderChange(param1:Object) : void
      {
         ExternalInterface.call("option.change.graphic.shader",param1);
      }
      
      public function callOptionGraphicWaterChange(param1:Object) : void
      {
         ExternalInterface.call("option.change.graphic.water",param1);
      }
      
      public function callOptionGraphicColorChange(param1:Object) : void
      {
         ExternalInterface.call("option.change.graphic.color",param1);
      }
      
      public function callOptionGraphicEffectChange(param1:Object) : void
      {
         ExternalInterface.call("option.change.graphic.effect",param1);
      }
      
      public function callOptionGraphicAntiChange(param1:Object) : void
      {
         ExternalInterface.call("option.change.graphic.anti",param1);
      }
      
      public function callOptionGraphicFilterChange(param1:Object) : void
      {
         ExternalInterface.call("option.change.graphic.filter",param1);
      }
      
      public function callOptionGraphicVerticalChange(param1:Object) : void
      {
         ExternalInterface.call("option.change.graphic.vertical",param1);
      }
      
      public function callOptionGraphicMotionChange(param1:Object) : void
      {
         ExternalInterface.call("option.change.graphic.motion",param1);
      }
      
      public function callOptionGraphicMultiChange(param1:Object) : void
      {
         ExternalInterface.call("option.change.graphic.multi",param1);
      }
      
      public function callOptionGraphicLightingChange(param1:Object) : void
      {
         ExternalInterface.call("option.change.graphic.lighting",param1);
      }
      
      public function callOptionGraphicBrightnessChange(param1:Number) : void
      {
         ExternalInterface.call("option.change.graphic.brightness",param1);
      }
      
      public function callOptionGraphicMaxFPSChange(param1:Number) : void
      {
         ExternalInterface.call("option.change.graphic.maxfps",param1);
      }
      
      public function callOptionGraphicPresetChange(param1:Number) : void
      {
         ExternalInterface.call("option.change.graphic.preset",param1);
      }
      
      public function callOptionGraphicDetailCheckChange(param1:Boolean) : void
      {
         ExternalInterface.call("option.change.graphic.detailcheck",param1);
      }
      
      public function callOptionSound() : void
      {
         ExternalInterface.call("option.call.sound");
      }
      
      public function callOptionSoundMasterChange(param1:Number) : void
      {
         ExternalInterface.call("option.change.sound.master",param1);
      }
      
      public function callOptionSoundMusicChange(param1:Number) : void
      {
         ExternalInterface.call("option.change.sound.music",param1);
      }
      
      public function callOptionSoundVoiceChange(param1:Number) : void
      {
         ExternalInterface.call("option.change.sound.voice",param1);
      }
      
      public function callOptionSoundSpeakerChange(param1:Number) : void
      {
         ExternalInterface.call("option.change.sound.speaker",param1);
      }
      
      public function callOptionSoundQuilityChange(param1:Number) : void
      {
         ExternalInterface.call("option.change.sound.quality",param1);
      }
      
      public function callOptionSoundLobbyMusicChange(param1:Boolean) : void
      {
         ExternalInterface.call("option.change.sound.lobbymusic",param1);
      }
      
      public function callOptionVoice() : void
      {
         ExternalInterface.call("option.call.voice");
      }
      
      public function callOptionVoiceEnableChange(param1:Boolean) : void
      {
         ExternalInterface.call("option.change.voice.enable",param1);
      }
      
      public function callOptionVoiceVolumeChange(param1:Number) : void
      {
         ExternalInterface.call("option.change.voice.volume",param1);
      }
      
      public function callOptionVoiceTestChange(param1:Boolean) : void
      {
         ExternalInterface.call("option.change.voice.test",param1);
      }
      
      public function callOptionVoiceExtendChange(param1:Boolean) : void
      {
         ExternalInterface.call("option.change.voice.extend",param1);
      }
      
      public function callViewTeamCT() : void
      {
         ExternalInterface.call("team.view.ct");
      }
      
      public function callViewTeamTR() : void
      {
         ExternalInterface.call("team.view.tr");
      }
      
      public function callChaSelectChangeCT(param1:Object) : void
      {
         ExternalInterface.call("cha.change.ct",param1);
      }
      
      public function callChaSelectChangeTR(param1:Object) : void
      {
         ExternalInterface.call("cha.change.tr",param1);
      }
      
      public function callChaSelectOpen() : void
      {
         ExternalInterface.call("cha.open");
      }
      
      public function callChaSelectClose() : void
      {
         ExternalInterface.call("cha.close");
      }
      
      public function callCashPopupClose() : void
      {
         ExternalInterface.call("cashpopup.close");
      }
      
      public function callTextureRenderUpdate(param1:String) : void
      {
         ExternalInterface.call("render.call.update",param1);
      }
      
      public function callTextureRenderUpdateStop(param1:String) : void
      {
         ExternalInterface.call("render.call.update.stop",param1);
      }
      
      public function callUnlockOpen() : void
      {
         ExternalInterface.call("unlock.call.open");
      }
      
      public function callUnlockTabSelect(param1:Object) : void
      {
         ExternalInterface.call("unlock.call.tabselect",param1);
      }
      
      public function callUnlockBuy(param1:Object) : void
      {
         ExternalInterface.call("unlock.call.buy",param1);
      }
      
      public function callUserProfileData(param1:String) : void
      {
         ExternalInterface.call("userprofile.popup.call.data",param1);
      }
      
      public function callClanProfileData(param1:String) : void
      {
         ExternalInterface.call("clanprofile.popup.call.data",param1);
      }
      
      public function callUserEditAch(param1:Object) : void
      {
         ExternalInterface.call("userprofile.call.edit.ach",param1);
      }
      
      public function callUserEditTitle(param1:Object) : void
      {
         ExternalInterface.call("userprofile.call.edit.title",param1);
      }
      
      public function callUserEditMiniprofileInfo(param1:Object, param2:Object) : void
      {
         ExternalInterface.call("userprofile.call.edit",param1,param2);
      }
      
      public function callGZShopBuy(param1:Object) : void
      {
         ExternalInterface.call("gz.call.shop.buy",param1);
      }
      
      public function callGZInventoryDel(param1:Object) : void
      {
         ExternalInterface.call("gz.call.inventory.del",param1);
      }
      
      public function callGZInventoryEquip(param1:Object) : void
      {
         ExternalInterface.call("gz.call.inventory.equip",param1);
      }
      
      public function callGZInventorySelectTab(param1:Object) : void
      {
         ExternalInterface.call("gz.call.inventory.select.tab",param1);
      }
      
      public function callGZUserInfoDelItem(param1:Object) : void
      {
         ExternalInterface.call("gz.call.userinfo.weapon.del",param1);
      }
      
      public function callGZShopData() : void
      {
         ExternalInterface.call("gz.call.shop.data");
      }
      
      public function callGZUserInfoData() : void
      {
         ExternalInterface.call("gz.call.userinfo.data");
      }
      
      public function callRewardClose() : void
      {
         ExternalInterface.call("reward.call.close");
      }
      
      public function callGZMapOpen() : void
      {
         ExternalInterface.call("gz.call.map.open");
      }
      
      public function callGZMapClose() : void
      {
         ExternalInterface.call("gz.call.map.close");
      }
      
      public function callGZMapFire(param1:Number, param2:Number) : void
      {
         ExternalInterface.call("gz.call.map.fire",param1,param2);
      }
      
      public function callGZMapDelUserFlag(param1:String) : void
      {
         ExternalInterface.call("gz.call.map.del.userflag",param1);
      }
      
      public function callGZMapNameCheck(param1:Boolean) : void
      {
         ExternalInterface.call("gz.call.map.namecheck",param1);
      }
      
      public function callGZMapMouseDown(param1:Number = 0, param2:Number = 0) : void
      {
         ExternalInterface.call("gz.call.map.mousedown",param1,param2);
      }
      
      public function callGZMapMouseUp() : void
      {
         ExternalInterface.call("gz.call.map.mouseup");
      }
      
      public function callGZMapMouseMove(param1:Number, param2:Number) : void
      {
         ExternalInterface.call("gz.call.map.mousemove",param1,param2);
      }
      
      public function callGZMapScale(param1:int) : void
      {
         ExternalInterface.call("gz.call.map.scale",param1);
      }
      
      public function callGZMapHelpIconOption(param1:Boolean) : void
      {
         if(param1)
         {
            ExternalInterface.call("gz.call.map.help.view.all");
         }
         else
         {
            ExternalInterface.call("gz.call.map.help.view.actived");
         }
      }
      
      public function callCoupon(param1:String) : void
      {
         ExternalInterface.call("coupon.call.input",param1);
      }
      
      public function callReportSearchUser(param1:String) : void
      {
         ExternalInterface.call("report.call.searchuser",param1);
      }
      
      public function callReport(param1:String, param2:int, param3:String = "") : void
      {
         ExternalInterface.call("report.call.send",param1,param2,param3);
      }
      
      public function callRoomInfoPopupData(param1:Object) : void
      {
         ExternalInterface.call("roominfopopup.call.data",param1);
      }
      
      public function callKickReport(param1:String, param2:int) : void
      {
         ExternalInterface.call("kickreport.call.send",param1,param2);
      }
      
      public function callBigcitySquadChange(param1:Object) : void
      {
         ExternalInterface.call("bigcity.squad.call.change",param1);
      }
      
      public function callBigcitySquadUserKick(param1:Object) : void
      {
         ExternalInterface.call("bigcity.squad.call.user.kick",param1);
      }
      
      public function callBigcitySquadUserInvite(param1:Object) : void
      {
         ExternalInterface.call("bigcity.squad.call.user.invite",param1);
      }
      
      public function callBigcitySquadJoin(param1:Object) : void
      {
         ExternalInterface.call("bigcity.squad.call.join",param1);
      }
      
      public function callBigcitySquadQuit() : void
      {
         ExternalInterface.call("bigcity.squad.call.quit");
      }
      
      public function callLuckyPointUse() : void
      {
         ExternalInterface.call("luckypoint.call.use");
      }
      
      public function callLuckyPointClose() : void
      {
         ExternalInterface.call("luckypoint.call.close");
      }
      
      public function callLuckyPointUseContinue() : void
      {
         ExternalInterface.call("luckypoint.call.use.continue");
      }
      
      public function callLuckyPointUseContinueCancel() : void
      {
         ExternalInterface.call("luckypoint.call.use.continue.cancel");
      }
      
      public function callLuckyPointEffComplete() : void
      {
         ExternalInterface.call("luckypoint.call.effcomplete");
      }
      
      public function callUserCallExitPopup() : void
      {
         trace("!!!!!!!!!!!!!!!!!!!!!!!      CALL OUT     !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
         ExternalInterface.call("user.call.exit.popup");
      }
      
      public function callHeroUpgradeHealth() : void
      {
         ExternalInterface.call("hero.call.upgrade.health");
      }
      
      public function callHeroUpgradeAttack() : void
      {
         ExternalInterface.call("hero.call.upgrade.attack");
      }
      
      public function callHeroUpgradeClose() : void
      {
         ExternalInterface.call("hero.call.upgrade.close");
      }
      
      public function callWantedReport(param1:String, param2:int) : void
      {
         ExternalInterface.call("bigcity.call.wanted.report",param1,param2);
      }
   }
}
