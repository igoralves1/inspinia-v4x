import {Component} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {
    LucideAngularModule,
    LucideBriefcase,
    LucideLayoutGrid,
    LucideList,
    LucideMapPin,
    LucideSearch,
    LucideStar
} from 'lucide-angular';
import {CompanyType} from '@/app/views/other-apps/companies/types';
import {CompanyCardComponent} from '@/app/views/other-apps/companies/components/company-card.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {NgIcon} from '@ng-icons/core';

@Component({
    selector: 'app-companies',
    imports: [
        PageTitleComponent, LucideAngularModule, CompanyCardComponent, NgbPaginationModule, NgIcon
    ],
    templateUrl: './companies.component.html',
    styles: ``
})
export class CompaniesComponent {
    LucideSearch = LucideSearch
    LucideMapPin = LucideMapPin
    LucideStar = LucideStar
    LucideBriefcase = LucideBriefcase
    LucideLayoutGrid = LucideLayoutGrid
    LucideList = LucideList

    companies: CompanyType[] = [
        {
            id: 1,
            logo: "assets/images/logos/amazon.svg",
            name: "Amazon Inc.",
            url: "https://www.amazon.com",
            tags: [
                {name: "Seattle, WA", icon: "tablerMapPin"},
                {name: "eCommerce", icon: "tablerShoppingCart"}
            ],
            rating: 4,
            description: "Amazon.com, Inc. is an American multinational technology company focusing on e-commerce, cloud computing, and digital streaming.",
            stats: [
                {name: "Employees", "count": 1.5, "suffix": "M+"},
                {name: "Revenue", "count": 514, "prefix": "$", "suffix": "B"}
            ]
        },
        {
            id: 2,
            logo: "assets/images/logos/apple.svg",
            name: "Apple Inc.",
            url: "https://www.apple.com",
            tags: [
                {name: "Cupertino, CA", icon: "tablerMapPin"},
                {name: "Tech", icon: "tablerDeviceMobile"}
            ],
            rating: 4,
            description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, and accessories.",
            stats: [
                {name: "Employees", "count": 160, "suffix": "K+"},
                {name: "Revenue", "count": 383, "prefix": "$", "suffix": "B"}
            ]
        },
        {
            id: 3,
            logo: "assets/images/logos/walmart.svg",
            name: "Walmart Inc.",
            url: "https://www.walmart.com",
            tags: [
                {name: "Bentonville, AR", icon: "tablerMapPin"},
                {name: "Retail", icon: "ti ti-building-store"}
            ],
            rating: 3,
            description: "Walmart operates a chain of hypermarkets, discount department stores, and grocery stores worldwide.",
            stats: [
                {name: "Employees", "count": 2.1, "suffix": "M+"},
                {name: "Revenue", "count": 611, "prefix": "$", "suffix": "B"}
            ]
        },
        {
            id: 4,
            logo: "assets/images/logos/starbucks.svg",
            name: "Starbucks",
            url: "https://www.starbucks.com",
            tags: [
                {name: "Seattle, WA", icon: "tablerMapPin"},
                {name: "Food & Beverage", icon: "tablerCoffee"}
            ],
            rating: 3,
            description: "Starbucks is a multinational chain of coffeehouses and roastery reserves headquartered in Seattle, Washington.",
            stats: [
                {name: "Employees", "count": 400, "suffix": "K+"},
                {name: "Revenue", "count": 36, "prefix": "$", "suffix": "B"}
            ]
        },
        {
            id: 5,
            logo: "assets/images/logos/meta.svg",
            name: "Meta Platforms",
            url: "https://about.meta.com",
            tags: [
                {name: "Menlo Park, CA", icon: "tablerMapPin"},
                {name: "Tech", icon: "ti ti-network"}
            ],
            rating: 4,
            description: "Meta develops social media platforms and technologies including Facebook, Instagram, and the Metaverse.",
            stats: [
                {name: "Employees", "count": 86, "suffix": "K+"},
                {name: "Revenue", "count": 117, "prefix": "$", "suffix": "B"}
            ]
        },
        {
            id: 6,
            logo: "assets/images/logos/spotify.svg",
            name: "Spotify",
            url: "https://www.spotify.com",
            tags: [
                {name: "Stockholm, Sweden", icon: "tablerMapPin"},
                {name: "Entertainment", icon: "tablerMusic"}
            ],
            rating: 3,
            description: "Spotify is a digital music, podcast, and video streaming service with millions of active users worldwide.",
            stats: [
                {name: "Employees", "count": 8, "suffix": "K+"},
                {name: "Revenue", "count": 13, "prefix": "$", "suffix": "B"}
            ]
        },
        {
            id: 7,
            logo: "assets/images/logos/google.svg",
            name: "Google LLC",
            url: "https://www.google.com",
            tags: [
                {name: "Mountain View, CA", icon: "tablerMapPin"},
                {name: "Tech", icon: "tablerWorld"}
            ],
            rating: 4,
            description: "Google specializes in internet-related services and products, including search, ads, cloud, and more.",
            stats: [
                {name: "Employees", "count": 18, "suffix": "K+"},
                {name: "Revenue", "count": 324, "prefix": "$", "suffix": "B"}
            ]
        },
        {
            id: 8,
            logo: "assets/images/logos/airbnb.svg",
            name: "Airbnb",
            url: "https://www.airbnb.com",
            tags: [
                {name: "San Francisco, CA", icon: "tablerMapPin"},
                {name: "Hospitality", icon: "tablerHome"}
            ],
            rating: 3,
            description: "Airbnb is a global platform for lodging, primarily homestays for vacation rentals and tourism activities.",
            stats: [
                {name: "Employees", "count": 6, "suffix": "K+"},
                {name: "Revenue", "count": 9.9, "prefix": "$", "suffix": "B"}
            ]
        },
        {
            id: 9,
            logo: "assets/images/logos/shell.svg",
            name: "Shell plc",
            url: "https://www.shell.com",
            tags: [
                {name: "London, UK", icon: "tablerMapPin"},
                {name: "Energy", icon: "tablerGasStation"}
            ],
            rating: 3,
            description: "Shell is a global energy and petrochemical company focused on oil, gas, and renewable energy solutions.",
            stats: [
                {name: "Employees", "count": 90, "suffix": "K+"},
                {name: "Revenue", "count": 381, "prefix": "$", "suffix": "B"}
            ]
        }
    ]

}
