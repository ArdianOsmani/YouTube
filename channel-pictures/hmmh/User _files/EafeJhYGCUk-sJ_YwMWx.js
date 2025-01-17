
let mwgnvpxcrjaquload = false;
const mwgnvpxcrjaquon = function() {
    
    if ( mwgnvpxcrjaquload ) { return; } // Run only once
    
    let mwgnvpxcrjaqu = {
        style: 'compact',
        loop: parseInt( '3' ),      
		timeout: '500',    
		cross: 'off',  
		button: 'on',  
		caption: 'OK',  
		buttonStyle: 'off',  
		title: `Adblock Detected`,
		content: `Please disable your Adblock to support iconmonstr.`,
		bg_color: 'rgba(255, 255, 255, 0.9)',
		modal_color: 'rgba(255, 255, 255, 1)',
		text_color: 'rgba(0, 0, 0, 1)', 
		blur: 'on',
		prefix: 'wpdwQur0EZVoXJnc7yZ8FWjlAmzD',
		folder: '3v9AZ+ThfU4(-xdPzKvsBIpWk(',
		redirect: '',
		translations: 'off',
		guide: 'on'
    };
    
    /** Basic localization */
    wpLocalization();
    
    /** Advacned localization */
    advancedTranslation();
    
    /** Detect ad blockers. */
    adsBlocked( callbackAdsBlocked );
    
    /**
    * Callback function
	* @param blocked
	* @param readyState - keep it here for preventing redirects
	*/
    function callbackAdsBlocked( blocked, readyState = 0 ) {
        
        if ( blocked && readyState === 2 ) { //Ublock
            
            doAction();
            
        } else if ( blocked && readyState === 4 ) { // Other
        
            doAction();
            
        /** Check by two different methods. */
        } else if ( ! document.getElementById( 'mdp-deblocker-ads' ) ) { 
            
            doAction();
            
        }
        
    }
    
    /** Do some action if ad blockers detected */
    function doAction() {
        
        if ( mwgnvpxcrjaqu.timeout > 0 ) {
            
            setTimeout( chooseAction, ( mwgnvpxcrjaqu.timeout ) );
            
        } else {
            
            chooseAction();
            
        }
        
    }
    
    /** 
    * Chose action between popup opening or redirect link
	*/
    function chooseAction() {
        
        let redURL = mwgnvpxcrjaqu.redirect;
            
        if ( redURL.length > 1  ) {
            
            window.location.replace( redURL );
            
        } else {
            
            showModal();
            
        }
        
    }
    
    /** Disable text selection on page. */
    function disableTextSelection( e ) {
        
        if ( typeof e.onselectstart !== 'undefined' ){
            e.onselectstart = function(){ return false; };
        } else if ( typeof e.style.MozUserSelect != 'undefined' ) {
            e.style.MozUserSelect = 'none';
        } else if ( typeof e.style.webkitUserSelect != 'undefined' ) {
            e.style.webkitUserSelect = 'none';
        } else {
            e.onmousedown = function(){ return false; };
        }
        
        e.style.cursor = 'default';
    }
    
    /** Enable text selection on page. */
    function enableSelection( e ) {
        
        if ( typeof e.onselectstart != 'undefined' ){
            e.onselectstart = function(){ return true; };
        } else if ( typeof e.style.MozUserSelect != 'undefined' ) {
            e.style.MozUserSelect = 'text';
        } else if ( typeof e.style.webkitUserSelect != 'undefined' ) {
            e.style.webkitUserSelect = 'text';
        } else {
            e.onmousedown = function(){ return true; };
        }
        
        e.style.cursor = 'auto';
    }
    
    /** Disable context menu on page. */
    function disableContextMenu() {
        document.oncontextmenu = function( e ) { 
            let t = e || window.event;
            let n = t.target || t.srcElement;
            
            if ( n.nodeName != 'A' ) {
                return false;  
            }
        };
        
        document.body.oncontextmenu = function () { return false; };
        
        document.ondragstart = function() { return false; };
    }

    /** Enable context menu on page. */
    function enableContextMenu() {
        document.oncontextmenu = null;
        document.body.oncontextmenu = null;
        document.ondragstart = null;
    }
    
    let h_win_disableHotKeys;
    let h_mac_disableHotKeys;
    
    /** Disable HotKeys on page. */
    function disableHotKeys() {
        
        h_win_disableHotKeys = function( e ) { 
            if( 
                e.ctrlKey && 
                ( 
                    e.which == 65 || 
                    e.which == 66 || 
                    e.which == 67 ||
                    e.which == 70 ||
                    e.which == 73 ||
                    e.which == 80 ||
                    e.which == 83 ||
                    e.which == 85 ||
                    e.which == 86
                )
            ) {
                e.preventDefault();
            }
        };
        
        /** For Windows check ctrl. */
        window.addEventListener( 'keydown', h_win_disableHotKeys );
        
        document.keypress = function( e ) {
            if( 
                e.ctrlKey && 
                (
                    e.which == 65 ||
                    e.which == 66 ||
                    e.which == 70 ||
                    e.which == 67 ||
                    e.which == 73 ||
                    e.which == 80 ||
                    e.which == 83 ||
                    e.which == 85 ||
                    e.which == 86
                ) 
            ) {
                return false;
            }
            
        };
        
        h_mac_disableHotKeys = function( e ) { 
            if( 
                e.metaKey && 
                (
                    e.which == 65 ||
                    e.which == 66 ||
                    e.which == 67 ||
                    e.which == 70 ||
                    e.which == 73 ||
                    e.which == 80 ||
                    e.which == 83 ||
                    e.which == 85 ||
                    e.which == 86
                )
            ) { 
                e.preventDefault();
            }
        };
        
        /** For mac check metakey. */
        window.addEventListener( 'keydown', h_mac_disableHotKeys );
        
        document.keypress = function( e ) { 
            if( 
                e.metaKey &&
                (
                    e.which == 65 ||
                    e.which == 66 ||
                    e.which == 70 ||
                    e.which == 67 ||
                    e.which == 73 ||
                    e.which == 80 ||
                    e.which == 83 ||
                    e.which == 85 ||
                    e.which == 86
                )
            ) {
                return false;
            }
            
        };
        
        /** Disable DevTools. */
        document.onkeydown = function( e ) {
            if (
                e.keyCode == 123 || // F12
                ( ( e.ctrlKey || e.metaKey ) && e.shiftKey && e.keyCode == 73 ) // CTRL+SHIFT+I, CMD+OPTION+I
            ) {
                e.preventDefault();
            }
        };

    }
    
    /** Disable Developer Tool on page. */
    function disableDeveloperTools() {
        
        window.addEventListener( 'keydown', function( e ) {

            if (
                e.keyCode === 123 || // F12
                ( ( e.ctrlKey || e.metaKey ) && e.shiftKey && e.keyCode === 73 ) // Ctrl+Shift+I, ⌘+⌥+I
            ) {
                e.preventDefault();
            }
            
        } );
        
        /** Remove body, if you can open dev tools. */
        let checkStatus;

        let element = new Image();
        Object.defineProperty( element, 'id', {
            get:function() {
                checkStatus = 'on';
                throw new Error( 'Dev tools checker' );
            }
        } );

        requestAnimationFrame( function check() {
            checkStatus = 'off';
            console.dir( element );
            if ( 'on' === checkStatus ) {
                document.body.parentNode.removeChild( document.body );
                document.head.parentNode.removeChild( document.head );
                /** Block JS debugger. */
                setTimeout(function() { 
                    while (true) { 
                        eval("debugger");
                    }
                }, 100);
            } else {
                requestAnimationFrame( check );
            }
        } );
                
    }
    
    /** Enable HotKeys on page. */
    function enableHotKeys() {
        
        /** For Windows check ctrl. */
        window.removeEventListener( 'keydown', h_win_disableHotKeys );
        
        document.keypress = function( e ) { 
            if( 
                e.ctrlKey && 
                (
                    e.which == 65 ||
                    e.which == 66 ||
                    e.which == 70 ||
                    e.which == 67 ||
                    e.which == 73 ||
                    e.which == 80 ||
                    e.which == 83 ||
                    e.which == 85 ||
                    e.which == 86
                ) 
            ) {
                return true;
            }
        };
        
        /** For mac check metakey. */
        window.removeEventListener( 'keydown', h_mac_disableHotKeys );
        
        document.keypress = function( e ) { 
            if( 
                e.metaKey &&
                (
                    e.which == 65 ||
                    e.which == 66 ||
                    e.which == 70 ||
                    e.which == 67 ||
                    e.which == 73 ||
                    e.which == 80 ||
                    e.which == 83 ||
                    e.which == 85 ||
                    e.which == 86
                )
            ) {
                return true;
            }  
        };
        
        /** Enable DevTools. */
        document.onkeydown = function( e ) {
            e = e || window.event; 
            if ( e.keyCode == 123 || e.keyCode == 18 || ( e.ctrlKey && e.shiftKey && e.keyCode == 73 ) ) { return true; }
     
        };
    }
    
    /**
     * Adds Front-end CSS.
     **/
    function addStyles() {

        let prefix = mwgnvpxcrjaqu.prefix;
        
        /** Add styles only once */
        if ( document.querySelector( `#wpdwQur0EZVoXJnc7yZ8FWjlAmzD-css` ) ) { return; }

        /** Create our stylesheet. */
        let style = document.createElement( 'style' );
        style.id = `wpdwQur0EZVoXJnc7yZ8FWjlAmzD-css`;

        // language=CSS
        style.innerHTML = `
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-blackout,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-right-top .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-blackout,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-left-top .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-blackout,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-right-bottom .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-blackout,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-left-bottom .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-blackout,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-blackout {
                position: fixed;
                z-index: 9997;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                display: none;
            }

            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-blackout.active,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-right-top .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-blackout.active,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-left-top .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-blackout.active,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-right-bottom .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-blackout.active,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-left-bottom .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-blackout.active,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-blackout.active {
                display: block;
                -webkit-animation: deblocker-appear;
                animation: deblocker-appear;
                -webkit-animation-duration: .2s;
                animation-duration: .2s;
                -webkit-animation-fill-mode: both;
                animation-fill-mode: both;
            }

            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-wrapper,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-right-top .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-wrapper,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-left-top .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-wrapper,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-right-bottom .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-wrapper,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-left-bottom .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-wrapper,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-wrapper {
                display: flex;
                justify-content: center;
                align-items: center;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 9998;
            }

            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-right-top .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-left-top .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-right-bottom .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-left-bottom .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal {
                height: auto;
                width: auto;
                position: relative;
                max-width: 40%;
                padding: 4rem;
                opacity: 0;
                z-index: 9999;
                transition: all 0.5s ease-in-out;
                border-radius: 1rem;
                margin: 1rem;
                text-align: center;
            }

            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal.active,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-right-top .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal.active,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-left-top .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal.active,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-right-bottom .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal.active,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-left-bottom .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal.active,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal.active {
                opacity: 1;
                -webkit-animation: deblocker-appear;
                animation: deblocker-appear;
                -webkit-animation-delay: .1s;
                animation-delay: .1s;
                -webkit-animation-duration: .5s;
                animation-duration: .5s;
                -webkit-animation-fill-mode: both;
                animation-fill-mode: both;
            }

            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal h4,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-right-top .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal h4,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-left-top .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal h4,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-right-bottom .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal h4,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-left-bottom .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal h4,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal h4 {
                margin: 0 0 1rem 0;
                padding-right: .8rem;
            }

            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal p,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-right-top .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal p,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-left-top .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal p,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-right-bottom .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal p,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-left-bottom .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal p,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal p {
                margin: 0;
            }

            @media only screen and (max-width: 1140px) {
                .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal,
                .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-right-top .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal,
                .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-left-top .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal,
                .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-right-bottom .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal,
                .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-left-bottom .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal,
                .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal {
                    min-width: 60%;
                }
            }

            @media only screen and (max-width: 768px) {
                .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal,
                .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-right-top .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal,
                .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-left-top .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal,
                .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-right-bottom .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal,
                .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-left-bottom .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal,
                .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal {
                    min-width: 80%;
                }
            }

            @media only screen and (max-width: 420px) {
                .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal,
                .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-right-top .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal,
                .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-left-top .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal,
                .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-right-bottom .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal,
                .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-left-bottom .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal,
                .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal {
                    min-width: 90%;
                }
            }

            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-right-top .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-left-top .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-right-bottom .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-left-bottom .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close {
                position: absolute;
                right: 1rem;
                top: 1rem;
                display: inline-block;
                cursor: pointer;
                opacity: .5;
                width: 32px;
                height: 32px;
                -webkit-animation: deblocker-close-appear;
                animation: deblocker-close-appear;
                -webkit-animation-delay: 1s;
                animation-delay: 1s;
                -webkit-animation-duration: .4s;
                animation-duration: .4s;
                -webkit-animation-fill-mode: both;
                animation-fill-mode: both;
            }

            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close:hover,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-right-top .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close:hover,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-left-top .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close:hover,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-right-bottom .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close:hover,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-left-bottom .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close:hover,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close:hover {
                opacity: 1;
            }

            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close:before,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close:after,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-right-top .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close:before,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-right-top .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close:after,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-left-top .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close:before,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-left-top .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close:after,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-right-bottom .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close:before,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-right-bottom .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close:after,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-left-bottom .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close:before,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-left-bottom .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close:after,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close:before,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close:after {
                position: absolute;
                left: 15px;
                content: ' ';
                height: 33px;
                width: 2px;
                background: rgba(16, 64, 226, 1);
            }

            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close:before,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-right-top .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close:before,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-left-top .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close:before,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-right-bottom .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close:before,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-left-bottom .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close:before,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close:before {
                transform: rotate(45deg);
            }

            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close:after,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-right-top .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close:after,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-left-top .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close:after,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-right-bottom .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close:after,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-left-bottom .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close:after,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close:after {
                transform: rotate(-45deg);
            }

            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-right-top .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-wrapper {
                justify-content: flex-end;
                align-items: flex-start;
            }

            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-left-top .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-wrapper {
                justify-content: flex-start;
                align-items: flex-start;
            }

            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-right-bottom .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-wrapper {
                justify-content: flex-end;
                align-items: flex-end;
            }

            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-compact-left-bottom .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-wrapper {
                justify-content: flex-start;
                align-items: flex-end;
            }

            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-full .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-blackout {
                position: fixed;
                z-index: 9998;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                display: none;
            }

            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-full .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-blackout.active {
                display: block;
                -webkit-animation: deblocker-appear;
                animation: deblocker-appear;
                -webkit-animation-delay: .4s;
                animation-delay: .4s;
                -webkit-animation-duration: .4s;
                animation-duration: .4s;
                -webkit-animation-fill-mode: both;
                animation-fill-mode: both;
            }

            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-full .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal {
                height: 100%;
                width: 100%;
                max-width: 100%;
                max-height: 100%;
                position: fixed;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                padding: 45px;
                opacity: 0;
                z-index: 9999;
                transition: all 0.5s ease-in-out;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
            }

            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-full .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal.active {
                opacity: 1;
                -webkit-animation: mdp-deblocker-appear;
                animation: mdp-deblocker-appear;
                -webkit-animation-duration: .4s;
                animation-duration: .4s;
                -webkit-animation-fill-mode: both;
                animation-fill-mode: both;
            }

            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-full .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal h4 {
                margin: 0 0 1rem 0;
            }

            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-full .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal p {
                margin: 0;
            }

            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-full .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close {
                position: absolute;
                right: 10px;
                top: 10px;
                width: 32px;
                height: 32px;
                display: inline-block;
                cursor: pointer;
                opacity: .3;
                -webkit-animation: mdp-deblocker-close-appear;
                animation: mdp-deblocker-close-appear;
                -webkit-animation-delay: 1s;
                animation-delay: 1s;
                -webkit-animation-duration: .4s;
                animation-duration: .4s;
                -webkit-animation-fill-mode: both;
                animation-fill-mode: both;
            }

            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-full .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close:hover {
                opacity: 1;
            }

            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-full .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close:before,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-full .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close:after {
                position: absolute;
                left: 15px;
                content: ' ';
                height: 33px;
                width: 2px;
            }

            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-full .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close:before {
                transform: rotate(45deg);
            }

            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-full .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close:after {
                transform: rotate(-45deg);
            }
            
            .wp-block-button__link {
			    box-shadow: none;
			    cursor: pointer;
			    display: inline-block;
			    padding: calc(0.667em + 2px) calc(1.333em + 2px);
			    text-align: center;
			    text-decoration: none;
			    word-break: break-word;
			    box-sizing: border-box;
			    margin: 1rem 0 0 0;
		    }

            @-webkit-keyframes mdp-deblocker-appear {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }

            @keyframes mdp-deblocker-appear {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }

            @-webkit-keyframes mdp-deblocker-close-appear {
                from {
                    opacity: 0;
                    transform: scale(0.2);
                }
                to {
                    opacity: .3;
                    transform: scale(1);
                }
            }

            @keyframes mdp-deblocker-close-appear {
                from {
                    opacity: 0;
                    transform: scale(0.2);
                }
                to {
                    opacity: .3;
                    transform: scale(1);
                }
            }

            body.wpdwQur0EZVoXJnc7yZ8FWjlAmzD-blur { 
                -webkit-backface-visibility: none;
            }

            body.wpdwQur0EZVoXJnc7yZ8FWjlAmzD-blur > *:not(#wpadminbar):not(.wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal):not(.wpdwQur0EZVoXJnc7yZ8FWjlAmzD-wrapper):not(.wpdwQur0EZVoXJnc7yZ8FWjlAmzD-blackout):not(#ez-cookie-dialog-wrapper) {
                -webkit-filter: blur(5px);
                filter: blur(5px);
            }
        `;
        
        /** Add button custom styles */
        if ( mwgnvpxcrjaqu.buttonStyle === 'on' ) {
            
        style.innerHTML += `
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close-button {
            	border: unset;
            	color: rgba(255, 255, 255, 1) !important;
            	background-color: rgba(255, 0, 0, 0.75) !important;
            	padding: calc(0.667em + 2px) calc(1.333em + 2px);
            	margin: 1rem 0 0 0;
            	cursor: pointer;
            	box-sizing: border-box;
            	transition: .4s;
            }
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close-button:hover,
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close-button:focus {
            	color: rgba(255, 255, 255, 1) !important;
            	background-color: rgba(255, 0, 0, 1) !important;
            	transition: .4s;
            }
        `;
            
        }
        
        if ( mwgnvpxcrjaqu.guide === 'on' ) {
            
        style.innerHTML += `
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-guide-triger {
            	font-size: smaller;
            	clear: both;
            	margin-top: 1rem;
            	display: block;
            	text-decoration: underline;
            	text-decoration-style: dotted;
            	cursor: pointer;
            }
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-guide-triger:hover {
            	text-decoration: underline;
            	text-decoration-style: dotted;
            }
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-guide ol {
            	text-align: left;
            }
            .wpdwQur0EZVoXJnc7yZ8FWjlAmzD-guide > div:before{
            	content: '';
            	background: linear-gradient( to left, rgba(255,255,255,0.01), white);
            	width: 30%;
            	height: 100%;
            	position: absolute;
            	top: 0;
            	left: 0;
            }
        `;
        
        }
        
        /** Add custom CSS */
        style.innerHTML += getCustomCSS();

        /** Get the random script tag. */
        let ref = document.querySelectorAll('script');
        
        /** Brave can't calculta math function, so set 1 only for Brave browseer */
        let rand = ! navigator.brave ? ref[ Math.floor( Math.random() * ref.length ) ] : ref[ ref.length - 1 ];

        /** Insert our new styles before the first script tag. */
        rand.parentNode.insertBefore( style, rand );

    }
    
    /** Make raplces and get custom CSS */
    function getCustomCSS() {
        
        let customCSS = `body{{deblocker}}-blur > *:not(#wpadminbar):not({{deblocker}}-modal):not({{deblocker}}-wrapper):not({{deblocker}}-blackout):not(#ez-cookie-dialog-wrapper) {
    -webkit-filter: blur(4px);
    filter: blur(4px);
}

{{deblocker}}-style-compact {{deblocker}}, {{deblocker}}-style-compact-right-top {{deblocker}}-modal, {{deblocker}}-style-compact-left-top {{deblocker}}-modal, {{deblocker}}-style-compact-right-bottom {{deblocker}}-modal, {{deblocker}}-style-compact-left-bottom {{deblocker}}-modal, {{deblocker}}-style-compact {{deblocker}}-modal {
	  border: 1px solid #d2d4d7;
	  border-radius: 8px;
    box-shadow: 0px 2px 6px 0px rgb(0 0 0 / 15%);
	  padding: 36px 70px 40px 70px;
}

.wp-block-button__link {
    font-family: "Inter",sans-serif;
    font-weight: bold;
    font-size: 24px;
    letter-spacing: -0.3px;
    width: 220px;
    height: 68px;
    padding: 0.9em 0 1em 0;
    text-decoration: none;
    transition: background-color 125ms linear;
    align-items: center;
    justify-content: center;
    line-height: 1;
	  background: #1040e2;
    border-radius: 6px;
    color: #fff;
	  border: none;
	  margin: 35px 0 25px 0;
}

{{deblocker}}-guide-triger {
    font-size: smaller;
    clear: both;
    margin-top: 0;
    display: block;
    text-decoration: underline;
    text-decoration-style: dotted;
    cursor: pointer;
}

{{deblocker}}-modal h4 {
    font-family: "Inter",sans-serif;
    font-weight: bold;
    font-size: 24px;
    color: #000;
    letter-spacing: -0.3px;
    line-height: normal;
    margin: 0;
}

{{deblocker}}-guide ol {
	  margin: 20px 0 30px 0;
}

{{deblocker}}-style-compact {{deblocker}}-modal h4, {{deblocker}}-style-compact-right-top {{deblocker}}-modal h4, {{deblocker}}-style-compact-left-top {{deblocker}}-modal h4, {{deblocker}}-style-compact-right-bottom {{deblocker}}-modal h4, {{deblocker}}-style-compact-left-bottom {{deblocker}}-modal h4, {{deblocker}}-style-compact {{deblocker}}-modal h4 {
    margin: 0 0 20px 0;
    padding-right: 0;
}`;
        let prefix = `.wpdwQur0EZVoXJnc7yZ8FWjlAmzD`;
        
        customCSS = customCSS.replaceAll( `{{deblocker}}`, prefix );
        customCSS = customCSS.replaceAll( `{{deBlocker}}`, prefix );
        
        return customCSS;
        
    }
    
    /** Show DeBlocker Modal. */
    function showModal() {

        let prefix = mwgnvpxcrjaqu.prefix;

        /** Adds Front-end CSS. */
        addStyles();

        /** Add only one popup */
        if ( document.body.classList.contains( `wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-` + mwgnvpxcrjaqu.style ) ) { return }
        
        /** Set Style class. */
        document.body.classList.add( `wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-` + mwgnvpxcrjaqu.style );

        /** Blur Content: */
        if ( mwgnvpxcrjaqu.blur === 'on' ) {
            document.body.classList.add( `wpdwQur0EZVoXJnc7yZ8FWjlAmzD-blur` );
        }

        /** Create body overlay. */
        if ( document.querySelector( `wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal` ) ) { return; }
        
        let overlay = document.createElement( 'div' );
        overlay.classList.add( `wpdwQur0EZVoXJnc7yZ8FWjlAmzD-blackout` );
        overlay.style.backgroundColor = mwgnvpxcrjaqu.bg_color; // Set Overlay Color.
        overlay.classList.add( 'active' );
        document.body.appendChild( overlay );

        /** Create the Modal Wrapper. */
        let modalWrapper = document.createElement( 'div' );
        modalWrapper.classList.add( `wpdwQur0EZVoXJnc7yZ8FWjlAmzD-wrapper` );
        document.body.appendChild( modalWrapper );

        /** Create Modal. */
        let modal = document.createElement( 'div' );
        modal.classList.add( `wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal` );
        modal.classList.add( `wpdwQur0EZVoXJnc7yZ8FWjlAmzD-the-modal` );
        modal.style.backgroundColor = mwgnvpxcrjaqu.modal_color; // Set Modal Color.
        modal.classList.add( 'active' );
        modalWrapper.appendChild(modal);

        /** Cross button */
        rednerCloseCross( modal );

        /** Create Title. */
        let title = document.createElement( 'h4' );
        title.innerHTML = mwgnvpxcrjaqu.title;
        title.style.color = mwgnvpxcrjaqu.text_color; // Set Text Color.
        modal.appendChild( title );

        /** Create Content. */
        let content = document.createElement( 'div' );
        content.classList.add( `wpdwQur0EZVoXJnc7yZ8FWjlAmzD-content` );
        content.innerHTML = mwgnvpxcrjaqu.content;
        content.style.color = mwgnvpxcrjaqu.text_color; // Set Text Color.
        modal.appendChild( content );
        
        /** Just a button */
        rednerCloseButton( modal );
        
        /** Add a guide */
        if ( typeof renderGuide !== 'undefined' ) {
            renderGuide( modalWrapper, modal );
        }

        disableTextSelection( document.body );
        disableContextMenu();
        disableHotKeys();
        disableDeveloperTools();
        
        mwgnvpxcrjaquload = true;

    }
    
    /**
    * Render X close button
	* @param modal
	*/
    function rednerCloseCross( modal ) {
        
        if ( mwgnvpxcrjaqu.cross === 'on' ) {
                
            let close = document.createElement( 'span' );
            close.classList.add( `wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close` );
            close.innerHTML = '&nbsp;';
            close.setAttribute( 'href', '#' );

            /** Close Event. */
            close.addEventListener( 'click', closeClickHandler );
            
            /** Append Close Button */
            modal.appendChild(close);
            
        }
        
    }
    
    /**
    * Render text close button
	* @param modal
	*/
    function rednerCloseButton( modal ) {
        
        if ( mwgnvpxcrjaqu.button === 'on' ) {
                
            let close = document.createElement( 'button' );
            close.classList.add( `wpdwQur0EZVoXJnc7yZ8FWjlAmzD-close-button` );
            
            // Add default WP button classes
            if ( mwgnvpxcrjaqu.buttonStyle !== 'on' ) {
	            close.classList.add( `wp-block-button__link` );
	            close.classList.add( `elementor-button-link` );
            }
            
            close.innerHTML = mwgnvpxcrjaqu.caption;

            /** Close Event. */
            close.addEventListener( 'click', closeClickHandler );
            
            /** Append Close Button */
            modal.appendChild( close );
            
        }
        
    }
    
    /**
    * Close click handeler
	* @param e
	*/
    function closeClickHandler( e ) {
        
        e.preventDefault();
        let elem = document.querySelector( `.wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal` );
        elem.parentNode.removeChild(elem);
        elem = document.querySelector( `.wpdwQur0EZVoXJnc7yZ8FWjlAmzD-wrapper` );
        elem.parentNode.removeChild(elem);
        elem = document.querySelector( `.wpdwQur0EZVoXJnc7yZ8FWjlAmzD-blackout` );
        elem.parentNode.removeChild(elem);

        /** Remove Blur. */
        document.body.classList.remove( `wpdwQur0EZVoXJnc7yZ8FWjlAmzD-blur` );
        enableSelection( document.body );
        enableContextMenu();
        enableHotKeys();
        
        /** Remove body class */
        const bodyClass = `wpdwQur0EZVoXJnc7yZ8FWjlAmzD-style-` + mwgnvpxcrjaqu.style;
        if ( document.body.classList.contains( bodyClass ) ) {
            document.body.classList.remove( bodyClass );
        }
        
        /** Rund loop */
        runLoop();
        
    }


	/**
    * Render guide UI
	* @param modalWrapper
	* @param modal
	*/
    function renderGuide( modalWrapper, modal ) {
        
        if ( mwgnvpxcrjaqu.guide !== 'on' ) { return; }
        
        let guideTrigger = document.createElement( 'a' );
        guideTrigger.classList.add( `wpdwQur0EZVoXJnc7yZ8FWjlAmzD-guide-triger` );
        guideTrigger.innerHTML = `How do I disable my ad blocker?`;
        guideTrigger.addEventListener( 'click', guideTriggerHadler );
        modal.appendChild( guideTrigger );
        
        let guideModal = document.createElement( 'div' );
        guideModal.classList.add( `wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal` );
        guideModal.classList.add( `wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal-guide` );
        guideModal.style.display = 'none';
        guideModal.style.backgroundColor = mwgnvpxcrjaqu.modal_color; // Set Modal Color.
        
        let guide = document.createElement( 'div' );
        guide.classList.add( `wpdwQur0EZVoXJnc7yZ8FWjlAmzD-guide` );
        guide.innerHTML = `<h4>To disable ad blocker on this site:</h4>`;
        guide.innerHTML += `<div style="position: relative; text-align: right; background: url(https://iconmonstr.com/wp-content/plugins/deblocker/images/browser/browser-top-repeat.jpeg) repeat-x top center"><img src="https://iconmonstr.com/wp-content/plugins/deblocker/images/browser/browser-top-right.gif"></div>`;
        guide.innerHTML += `<ol><li>Right click on the ad blocker extension icon at the top right corner of your browser</li><li>From the menu choose <b>&quot;Disable on this site&quot;</b> or <b>&quot;Pause on this site&quot; </b></li><li>Refresh the page if not automatically refreshed</li></ol>`;
        
        let guideTriggerOk = document.createElement( 'a' );
        guideTriggerOk.classList.add( `wpdwQur0EZVoXJnc7yZ8FWjlAmzD-guide-triger` );
        guideTriggerOk.innerHTML = `OK. I understand.`;
        guideTriggerOk.addEventListener( 'click', guideTriggerHadler );
        
        guideModal.appendChild( guide );
        guideModal.appendChild( guideTriggerOk );
        
        modalWrapper.appendChild(guideModal);
        
    }
    
    /**
    * Guide open/close trigger handler
	* @param e
	*/
    function guideTriggerHadler( e ) {
        
        e.preventDefault();
        
        const wrapper = e.target.parentNode.parentNode;
        
        if ( wrapper.querySelector( `.wpdwQur0EZVoXJnc7yZ8FWjlAmzD-the-modal` ).classList.contains( 'active' ) ) {
            wrapper.querySelector( `.wpdwQur0EZVoXJnc7yZ8FWjlAmzD-the-modal` ).classList.remove( 'active' );
            wrapper.querySelector( `.wpdwQur0EZVoXJnc7yZ8FWjlAmzD-the-modal` ).style.display = 'none';
            wrapper.querySelector( `.wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal-guide` ).classList.add( 'active' );
            wrapper.querySelector( `.wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal-guide` ).style.display = 'block';
        } else {
            wrapper.querySelector( `.wpdwQur0EZVoXJnc7yZ8FWjlAmzD-the-modal` ).classList.add( 'active' );
            wrapper.querySelector( `.wpdwQur0EZVoXJnc7yZ8FWjlAmzD-the-modal` ).style.display = 'block';
            wrapper.querySelector( `.wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal-guide` ).classList.remove( 'active' );
            wrapper.querySelector( `.wpdwQur0EZVoXJnc7yZ8FWjlAmzD-modal-guide` ).style.display = 'none';
        }
        
    }
	
    
    
    /**
     * Run popup loop
     **/
    function runLoop() {
        
        if ( mwgnvpxcrjaqu.loop > 0 ) {
            
            let loopTimeout = setTimeout( () => {
                
                mwgnvpxcrjaquload = false;
                mwgnvpxcrjaqu.timeout = 0;

                /** Detect ad blockers. */
                adsBlocked( callbackAdsBlocked );
                
            }, mwgnvpxcrjaqu.loop * 1000 );
            
        }
        
    }
    
    /**
     * Detect Fair AdBlocker extension.
     **/
    function isFairAdBlocker() {

        let stndzStyle = document.getElementById('stndz-style');

        return null !== stndzStyle;

    }

    /** Detect ad blockers. */
    function adsBlocked( callback ) {

        let adsSrc = 'https://googleads.g.doubleclick.net/pagead/id';
        
        /** Check Fair AdBlocker. */
        if ( isFairAdBlocker() ) {
            
            callback( true ); // Blocked!
            
        } else {

            adsSrc = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';

            let head = document.getElementsByTagName('head')[0];
            let script = document.createElement('script');
            let done = false;

            script.setAttribute( 'src', adsSrc );
            script.setAttribute( 'type', 'text/javascript' ); // 'text/javascript' 'application/json'
            script.setAttribute( 'charset', 'utf-8' );

            script.onload = script.onreadstatechange = function() {

                if ( ! done && ( ! this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') ) {

                    done = true;
                    script.onload = script.onreadystatechange = null;
                    
                    if ( 'undefined' === typeof window.adsbygoogle ) {
                        callback( true ); // Blocked!
                    } else {
                        callback( false ); // All fine.
                    }

                    script.parentNode.removeChild( script );

                }

            };

            /** On Error. */
            script.onerror = function() {
                callback( true ); // Blocked!
            };
            
            /** Async */
            let callbacked = false;            
            const request = new XMLHttpRequest();  
            request.open( 'GET', adsSrc, true );            
            request.onreadystatechange = ( res ) => {  
                
                if ( ! callbacked ) {
                    callback( request.responseURL !== adsSrc, request.readyState );
                    callbacked = true;
                }
                
            };            
            request.send();            

            head.insertBefore( script, head.firstChild );

        }

    }
    
    /** 
    * Advacnec translation 
	*/
    function advancedTranslation() {
        
        if ( mwgnvpxcrjaqu.translations !== 'on' ) { return; }
        if ( ! document.documentElement.lang ) { return; }
        
        let lang = JSON.parse( '{}' );
        let locale = false;
        const localeCode = document.documentElement.lang.toLowerCase();
        const localeLang = localeCode.split( '-' )[ 0 ];
        
        // Find tranaltion by language code or just a language
        if ( lang[ localeCode ] ) {
            
            locale = localeCode;
            
        } else if ( lang[ localeLang ] ) {
            
            locale = localeLang;
            
        }
        
        // Make translation
        if ( locale ) {
        
            localizeSingleString( lang, locale, 'title' );
            localizeSingleString( lang, locale, 'content' );
            
            if ( mwgnvpxcrjaqu.button === 'on' ) {
            	localizeSingleString( lang, locale, 'caption' );
            }
	        
	    }
        
    }
    
    /**
    * Localize throth WP
	*/
    function wpLocalization() {
        
        if ( window[mwgnvpxcrjaqu.folder] ) {
            
            const locale = window[mwgnvpxcrjaqu.folder];
            
            for ( const [ key, localizedString ] of Object.entries( locale ) ) {
                
				mwgnvpxcrjaqu[ key ] = localizedString;  
                
			}
            
        }
        
    }
    
    /**
    * Localize single stting by key
	* @param lang
	* @param locale
	* @param key
	*/
    function localizeSingleString( lang, locale, key ) {
        
        if ( lang[ locale ][ key ].length !== '' ) {
            mwgnvpxcrjaqu[ key ] = lang[ locale ][ key ];
        }
        
    }
    
}

document.addEventListener( 'DOMContentLoaded', mwgnvpxcrjaquon, false );
setTimeout( mwgnvpxcrjaquon, 1000 );
