package cso2.ui.promotionObjs
{
   import cso2.com.gh.controls.BaseTileList;
   import cso2.core.csoUIComponent;
   import cso2.manager.systemManager;
   import cso2.scaleformCustom.csoButton;
   import flash.events.MouseEvent;
   
   public class promotionApp extends csoUIComponent
   {
       
      
      public var buttonClose:csoButton;
      
      public var listPromotion:BaseTileList;
      
      public var btnMore:csoButton;
      
      public function promotionApp()
      {
         super();
         systemManager.handlerAddCallback.registCallback("notice.set.data",this.newnotice);
         systemManager.handlerCommand.registCommand("a.promotion",this.newnotice);
      }
      
      override protected function configUI() : void
      {
         super.configUI();
         if(this.btnMore != null)
         {
            this.btnMore.visible = false;
            this.btnMore.addEventListener(MouseEvent.CLICK,this.fnMoreClick);
         }
      }
      
      function randomRange(minNum:Number, maxNum:Number) : Number
      {
         return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
      }
      
      private function fnMoreClick(param1:MouseEvent) : void
      {
         this.listPromotion.scrollCurrent = -this.listPromotion.dataProvider.length * 170;
      }
      
      public function fnSetData(param1:Array) : void
      {
         this.listPromotion.setData(param1);
         if(this.btnMore != null && param1.length > 4)
         {
            this.btnMore.visible = true;
         }
      }
      
      public function newnotice() : void
      {
         var _loc4_:Object = null;
         var _loc5_:Array = null;
         var _loc6_:Object = null;
         var _loc1_:int = 0;
         var _loc2_:int = 4;
         var _loc3_:Array = new Array();
         while(_loc1_ < _loc2_)
         {
            (_loc4_ = new Object()).imgUrl = "notice/" + this.randomRange(0,6) + ".jpg";
            _loc4_.title = "Notice text" + getRandomNumber().toString();
            _loc5_ = new Array();
            (_loc6_ = new Object()).link = "shop";
            _loc6_.id = 48;
            _loc6_.x = 0;
            _loc6_.y = 0;
            _loc6_.width = 489;
            _loc6_.height = 670;
            _loc5_.push(_loc6_);
            _loc4_.linkPointArray = _loc5_;
            _loc3_.push(_loc4_);
            _loc1_++;
         }
         this.fnSetData(_loc3_);
      }
   }
}
