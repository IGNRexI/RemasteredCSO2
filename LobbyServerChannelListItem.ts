package cso2.ui.lobbyServerObjs
{
   import cso2.com.gh.controls.BaseTileItem;
   import cso2.ui.SystemHelpPopup;
   import flash.display.Loader;
   import flash.display.MovieClip;
   import flash.display.Shape;
   import flash.events.MouseEvent;
   import flash.net.URLRequest;
   import flash.text.TextField;
   import flash.utils.getTimer;
   
   public class LobbyServerChannelListItem extends BaseTileItem
   {
       
      
      public var bg:MovieClip;
      
      public var tfName:TextField;
      
      public var tfRecommand:TextField;
      
      public var tfEnter:TextField;
      
      private var url:String;
      
      private var Lamp:Class;
      
      private var compressor:Object;
      
      private var label:String;
      
      public function LobbyServerChannelListItem()
      {
         super();
      }
      
      override protected function configUI() : void
      {
         super.configUI();
      }
      
      override protected function handleMouseRollOver(param1:MouseEvent) : void
      {
         super.handleMouseRollOver(param1);
         if(data.recommendContent)
         {
            SystemHelpPopup.getInstance().show(this,data.recommendContent,300,2);
         }
      }
      
      override protected function handleMouseRollOut(param1:MouseEvent) : void
      {
         super.handleMouseRollOut(param1);
         SystemHelpPopup.getInstance().hide();
      }
      
      function randomRange(minNum:Number, maxNum:Number) : Number
      {
         return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
      }
      
      override public function setData(param1:Object) : void
      {
         var aPing:int = 0;
         var aTime:int = 0;
         var rect:Shape = null;
         var ldr:Loader = null;
         var url:String = null;
         var urlReq:URLRequest = null;
         var _loc5_:* = undefined;
         super.setData(param1);
         if(param1 == null || isMax)
         {
            this.bg.gotoAndStop(4);
            this.tfRecommand.text = "";
            this.tfEnter.text = "";
            this.tfName.text = "";
            this.tfEnter.textColor = "CSO2_BIGCITY_SERVER_COLOR";
            this.enabled = false;
            return;
         }
         this.enabled = true;
         this.tfName.htmlText = param1.label;
         if(param1.recommend)
         {
            this.tfRecommand.text = "CSO2_UI_CHANNEL_RECOMMAND";
         }
         else
         {
            this.tfRecommand.text = "";
         }
         if(param1.ban)
         {
            this.tfEnter.textColor = "CSO2_UI_CHANNEL_BAN_COLOR";
            this.tfEnter.text = "CSO2_UI_CHANNEL_BAN";
            this.bg.gotoAndStop(1);
         }
         else
         {
            aTime = getTimer();
            aPing = getTimer() - aTime;
            this.tfRecommand.text = "CSO2_CHANNEL_01_TAG";
            this.tfName.text = "CSO2_CHANNEL_01_NAME";
            this.tfEnter.text = "Ping: " + aPing + " ms.";
            this.tfEnter.textColor = "CSO2_CHANNEL_01_COLOR";
            this.bg.gotoAndStop(2);
         }
      }
   }
}
