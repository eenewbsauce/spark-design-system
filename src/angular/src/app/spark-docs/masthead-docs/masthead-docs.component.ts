import { Component } from '@angular/core';

@Component({
  selector: 'sprk-masthead-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Masthead</h2>
      <sprk-masthead
        additionalClasses="angular-docs-u-Masthead-docs"
        [secondaryNavLinks]="links"
        [narrowNavLinks]="narrowLinks"
        idString="masthead-1"
      >
        <img
          logo-slot
          src="https://sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg"
          alt="Spark Design System"
        />
        <div little-nav-slot>
          <sprk-dropdown
            [choices]="siteDropdownChoices"
            additionalTriggerClasses="sprk-b-Link--plain sprk-c-Masthead__link"
            triggerText="Make a Selection..."
            title="My Choices"
            triggerIconType="chevron-down"
          >
            <div
              class="sprk-c-Dropdown__footer sprk-u-TextAlign--center"
              sprkDropdownFooter
            >
              <a class="sprk-c-Button sprk-c-Button--tertiary" href="#nogo">
                Go Elsewhere
              </a>
            </div>
          </sprk-dropdown>
        </div>
        <div utility-slot>
          <ul
            class="sprk-o-HorizontalList sprk-o-HorizontalList--spacing-large sprk-o-Stack--center-column"
          >
            <li>
              <a
                class="sprk-b-Link sprk-b-Link--plain sprk-b-Link--standalone"
                href="tel:555-555-5555"
              >
                (555) 555-5555
              </a>
            </li>

            <li>
              <a
                class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link"
                href="#nogo"
              >
                Talk To Us
              </a>
            </li>

            <li>
              <a
                class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link"
                routerLink="/cards"
                href="#nogo"
              >
                <sprk-icon
                  iconType="settings"
                  additionalClasses="sprk-c-Icon--current-color sprk-c-Icon--l"
                ></sprk-icon>
                <span class="sprk-u-ScreenReaderText">Settings</span>
              </a>
            </li>

            <li>
              <sprk-dropdown
                [choices]="simpleChoices"
                dropdownType="simple"
                title="My Account"
                triggerIconType="user"
                additionalTriggerClasses="sprk-b-Link--plain sprk-c-Masthead__link"
                additionalClasses="sprk-u-Right--zero"
                screenReaderText="User Account"
              ></sprk-dropdown>
            </li>
          </ul>
        </div>
        <div class="sprk-u-mas" narrowNavFooter>
          <a
            class="sprk-c-Button sprk-c-Button--secondary sprk-u-Width-100"
            href="#nogo"
            >Sign In</a
          >
        </div>
      </sprk-masthead>
    </div>
  `,
  styles: [``]
})
export class MastheadDocsComponent {
  links = [
    {
      text: 'Item 1',
      href: '/icons',
      active: false
    },
    {
      text: 'Item 2',
      active: false,
      subNav: [
        {
          text: 'Item 1',
          href: '/links'
        },
        {
          text: 'Item 2',
          href: '#nogo'
        },
        {
          text: 'Item 3',
          href: '#nogo'
        }
      ]
    },
    {
      text: 'Item 3',
      href: '#nogo',
      active: false,
      leadingIcon: 'settings'
    },
    {
      text: 'Item 4',
      href: '#nogo',
      leadingIcon: 'chat-online',
      subNav: [
        {
          text: 'Item 1',
          href: '#nogo'
        },
        {
          text: 'Item 2',
          href: '#nogo'
        },
        {
          text: 'Item 3',
          href: '#nogo'
        }
      ]
    },
    {
      text: 'Item 5',
      href: '#nogo',
      active: false,
      leadingIcon: 'chat-online'
    }
  ];

  narrowLinks = [
    {
      text: 'Item 1',
      active: false,
      subNav: [
        {
          text: 'Item 1',
          href: '/links'
        },
        {
          text: 'Item 2',
          href: '#nogo'
        },
        {
          text: 'Item 3',
          href: '#nogo'
        },
        {
          text: 'Item 4',
          href: '#nogo'
        }
      ]
    },
    {
      text: 'Item 2',
      href: '#nogo',
      active: true
    },
    {
      text: '(586) 123-4567',
      href: '#nogo',
      active: false,
      leadingIcon: 'landline'
    },
    {
      text: 'Talk To Us',
      href: '#nogo',
      active: false,
      leadingIcon: 'call-team-member'
    }
  ];

  siteDropdownChoices = [
    {
      content: {
        title: 'Choice Title',
        infoLine1: 'Information about this choice',
        infoLine2: 'More Information'
      },
      value: 'Choice Title 1',
      active: false
    },
    {
      content: {
        title: 'Choice Title',
        infoLine1: 'Information about this choice',
        infoLine2: 'More Information'
      },
      value: 'Choice Title 2',
      active: true
    }
  ];

  simpleChoices = [
    {
      text: 'Change Username',
      value: 'change-username'
    },
    {
      text: 'Change Password',
      value: 'change-password'
    },
    {
      text: 'Sign Out',
      value: 'sign-out'
    }
  ];

  constructor() {}
}
