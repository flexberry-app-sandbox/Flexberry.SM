﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.SM
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Ticket position.
    /// </summary>
    // *** Start programmer edit section *** (TicketPosition CustomAttributes)

    // *** End programmer edit section *** (TicketPosition CustomAttributes)
    [AutoAltered()]
    [Caption("Ticket position")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("TicketPositionE", new string[] {
            "Amount as \'Amount\'",
            "Event as \'Event\'",
            "Event.StartTime as \'Start time\'"}, Hidden=new string[] {
            "Event.StartTime"})]
    [MasterViewDefineAttribute("TicketPositionE", "Event", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "StartTime")]
    public class TicketPosition : ICSSoft.STORMNET.DataObject
    {
        
        private int fAmount;
        
        private IIS.SM.Event fEvent;
        
        private IIS.SM.Ticket fTicket;
        
        // *** Start programmer edit section *** (TicketPosition CustomMembers)

        // *** End programmer edit section *** (TicketPosition CustomMembers)

        
        /// <summary>
        /// Amount.
        /// </summary>
        // *** Start programmer edit section *** (TicketPosition.Amount CustomAttributes)

        // *** End programmer edit section *** (TicketPosition.Amount CustomAttributes)
        public virtual int Amount
        {
            get
            {
                // *** Start programmer edit section *** (TicketPosition.Amount Get start)

                // *** End programmer edit section *** (TicketPosition.Amount Get start)
                int result = this.fAmount;
                // *** Start programmer edit section *** (TicketPosition.Amount Get end)

                // *** End programmer edit section *** (TicketPosition.Amount Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (TicketPosition.Amount Set start)

                // *** End programmer edit section *** (TicketPosition.Amount Set start)
                this.fAmount = value;
                // *** Start programmer edit section *** (TicketPosition.Amount Set end)

                // *** End programmer edit section *** (TicketPosition.Amount Set end)
            }
        }
        
        /// <summary>
        /// Ticket position.
        /// </summary>
        // *** Start programmer edit section *** (TicketPosition.Event CustomAttributes)

        // *** End programmer edit section *** (TicketPosition.Event CustomAttributes)
        [NotNull()]
        public virtual IIS.SM.Event Event
        {
            get
            {
                // *** Start programmer edit section *** (TicketPosition.Event Get start)

                // *** End programmer edit section *** (TicketPosition.Event Get start)
                IIS.SM.Event result = this.fEvent;
                // *** Start programmer edit section *** (TicketPosition.Event Get end)

                // *** End programmer edit section *** (TicketPosition.Event Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (TicketPosition.Event Set start)

                // *** End programmer edit section *** (TicketPosition.Event Set start)
                this.fEvent = value;
                // *** Start programmer edit section *** (TicketPosition.Event Set end)

                // *** End programmer edit section *** (TicketPosition.Event Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.SM.Ticket.
        /// </summary>
        // *** Start programmer edit section *** (TicketPosition.Ticket CustomAttributes)

        // *** End programmer edit section *** (TicketPosition.Ticket CustomAttributes)
        [Agregator()]
        [NotNull()]
        public virtual IIS.SM.Ticket Ticket
        {
            get
            {
                // *** Start programmer edit section *** (TicketPosition.Ticket Get start)

                // *** End programmer edit section *** (TicketPosition.Ticket Get start)
                IIS.SM.Ticket result = this.fTicket;
                // *** Start programmer edit section *** (TicketPosition.Ticket Get end)

                // *** End programmer edit section *** (TicketPosition.Ticket Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (TicketPosition.Ticket Set start)

                // *** End programmer edit section *** (TicketPosition.Ticket Set start)
                this.fTicket = value;
                // *** Start programmer edit section *** (TicketPosition.Ticket Set end)

                // *** End programmer edit section *** (TicketPosition.Ticket Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "TicketPositionE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View TicketPositionE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("TicketPositionE", typeof(IIS.SM.TicketPosition));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of TicketPosition.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfTicketPosition CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfTicketPosition CustomAttributes)
    public class DetailArrayOfTicketPosition : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.SM.DetailArrayOfTicketPosition members)

        // *** End programmer edit section *** (IIS.SM.DetailArrayOfTicketPosition members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type TicketPosition by index.
        /// </summary>
        /// <summary>
        /// Adds object with type TicketPosition.
        /// </summary>
        public DetailArrayOfTicketPosition(IIS.SM.Ticket fTicket) : 
                base(typeof(TicketPosition), ((ICSSoft.STORMNET.DataObject)(fTicket)))
        {
        }
        
        public IIS.SM.TicketPosition this[int index]
        {
            get
            {
                return ((IIS.SM.TicketPosition)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.SM.TicketPosition dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
