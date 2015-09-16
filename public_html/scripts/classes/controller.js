/*******************************************************************
 *  Class: controller
 *  Descriptoin:  This class will be used as a base class to control all pages
 * 
 * 
 * 
 * 
 * 
 ********************************************************************/

 /**
  * 
  * @param {type} sName
  * @param {type} oBeforeShow
  * @param {type} oPageShow
  * @returns nothing
  */
 mpage = function(sName,oBeforeShow,oPageShow,oController)
 {
     this.m_sName = sName;
     this.m_oBeforeShow = oBeforeShow;
     
     this.m_oPageShow   = oPageShow;
     
     this.m_oController = oController;
          
     mpage.prototype.m_othis.InitEvents();
 };
 
 mpage.prototype = {

     /*
      * Description: Any class initialization 
      * 
      * @returns nothing
      */
      Init:function()
      {
                        
      },
     
     /***
      *  Setups all events.
      *  
      * @returns nothing
      */
     InitEvents:function()
     {
          $(document).on("pagebeforeshow",mpage.prototype.m_othis.getName(),mpage.prototype.m_othis.PageBeforeShow);
          $(document).on("pageshow",mpage.prototype.m_othis.getName(),mpage.prototype.m_othis.PageShow);          
     },
          
     /*** getter setters **/
     
     getName:function()
     {
         return mpage.prototype.m_othis.m_sName;
     },
     setName:function(sValue)
     {
         mpage.prototype.m_othis.m_sName = sValue;         
     },     
     getDefaultPageShow:function()
     {
         if(mpage.prototype.m_othis.m_oPageShow() !== null)
             return mpage.prototype.m_othis.m_oPageShow();
     },
     getDefaultBeforeShow:function()
     {
         if(mpage.prototype.m_othis.m_oBeforeShow() !== null)
             return mpage.prototype.m_othis.m_oBeforeShow();
     },
     getControllerObject:function()
     {
         return mpage.prototype.m_othis.m_oController;
     },
     
     /************************************************************/
     
     PageShow:function()
     {
        mpage.prototype.m_othis.getDefaultPageShow();
           
        getControllerObject().PageShow(mpage.prototype.m_othis.getName());
        
     },
     
     PageBeforeShow:function()
     {
        mpage.prototype.m_othis.getDefaultBeforeShow();
        
        getControllerObject().PageBeforeShow(mpage.prototype.m_othis.getName());
     } 
 };
 
 
 /***
  * 
  * @returns {controller}
  */
 controller = function()
 { 
     
     this.m_oPages = [];
     
     controller.prototype.m_othis = this;
          
     controller.prototype.m_othis.InitEvents();
                    
 };
    
 controller.prototype = {
     
     /***
      * Description: Any class initialization 
      * 
      * @returns nothing
      */
     Init:function()
     {
                        
     },
     
     /***
      *  Setups all events.
      *  
      * @returns nothing
      */
     InitEvents:function()
     {
         
     },
     
     /**
      * 
      * @param {string} sPageID
      * @param {function} oBeforeShow
      * @param {function} oAfterShow
      * @param {function} oPageShow
      * @returns nothing
      * 
      */
     addPage:function(sPageID,oBeforeShow,oAfterShow,oPageShow)
     {
         // If a page of this name already exists delete it
          controller.prototype.m_othis.deletePage(sPageID);
          
          controller.prototype.m_othis.getPages().push(new mpage(sPageID,oBeforeShow,oPageShow,controller.prototype.m_othis));
                   
     },
     /***
      * Delete an object in the array
      * 
      * @param {type} sPageID
      * @returns {undefined}
      */
     deletePage:function(sPageID)
     {
         var _iLoop = 0;
         
         var _oNewArray = [];
         var _bfound = false;
         
         for(_iLoop = 0;_iLoop<controller.prototype.m_othis.getPages().length;_iLoop++)
         {
            if(controller.prototype.m_othis.getPages[_iLoop].getName !== sPageID)   
            {
                _oNewArray.push(controller.prototype.m_othis.getPages[_iLoop]);
                _bfound = true;
            }
            else 
            {
                delete controller.prototype.m_othis.getPages[iLoop];
            }
         }
         
         if(_bfound)
             controller.prototype.m_othis.m_oPages = _oNewArray;
     },
     /** getter setters **/
     
     getPages:function()
     {
         return controller.prototype.m_othis.m_oPages;         
     },
     
     /***
      * This page will change a page
      * 
      * @param {type} sPageID
      * @returns {undefined}
      */
     ChangeThePage:function(sPageID)
     {
          $(':mobile-pagecontainer').pagecontainer('change', sPageID, {             
                 showLoadMsg: true
           });
     },
     
     PageShow:function(sPageID)
     {
         
     },
     PageBeforeShow:function(sPageID)
     {
         
     }
                    
 };
     
     
