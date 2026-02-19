//
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

import { fileNameVariants } from "@/lib/export-pdf/export-pdf-types";

interface LinkType {
  label: string;
  to: string;
  external?: boolean;
}

interface NestedLinkType {
  label: string;
  links: LinkType[];
}

export const projectLinks: LinkType[] = [
  {
    label: "Overview",
    to: "/"
  },
  {
    label: "Downloads",
    to: "/downloads"
  },
  {
    label: "Mailing Lists",
    to: "/mailing-list"
  },
  {
    label: "News",
    to: "/news"
  },
  {
    label: "Team",
    to: "/team"
  },
  {
    label: "Who is Using",
    to: "/who-is-using"
  },
  {
    label: "Recent Improvements",
    to: "/recent-improvements"
  },
  {
    label: "Roadmap",
    to: "/roadmap"
  }
];

export const documentationLinks: (LinkType | NestedLinkType)[] = [
  {
    label: "Reference Guide",
    to: "/docs"
  },
  {
    label: "Reference Guide (PDF)",
    to: `/books/${fileNameVariants.light}`,
    external: true
  },
  {
    label: "Reference Guide (Dark PDF)",
    to: `/books/${fileNameVariants.dark}`,
    external: true
  },
  {
    label: "Release Notes",
    to: "https://issues.apache.org/jira/browse/HBASE?report=com.atlassian.jira.plugin.system.project:changelog-panel#selectedTab=com.atlassian.jira.plugin.system.project%3Achangelog-panel",
    external: true
  },
  {
    label: "Issue Tracking",
    to: "https://issues.apache.org/jira/browse/HBASE",
    external: true
  },
  {
    label: "Source Repository",
    to: "/source-repository"
  },
  {
    label: "Resources",
    links: [
      {
        label: "Video/Presentations",
        to: "/docs/other-info"
      },
      {
        label: "ACID Semantics",
        to: "/acid-semantics"
      },
      {
        label: "Bulk Loads",
        to: "/docs/architecture/bulk-loading"
      },
      {
        label: "Metrics",
        to: "/docs/operational-management/metrics-and-monitoring"
      }
    ]
  }
];

export const asfLinks: LinkType[] = [
  {
    label: "Apache Software Foundation",
    to: "http://www.apache.org/foundation/",
    external: true
  },
  {
    label: "License",
    to: "https://www.apache.org/licenses/",
    external: true
  },
  {
    label: "How Apache Works",
    to: "http://www.apache.org/foundation/how-it-works.html",
    external: true
  },
  {
    label: "Foundation Program",
    to: "http://www.apache.org/foundation/sponsorship.html",
    external: true
  },
  {
    label: "Sponsors",
    to: "https://www.apache.org/foundation/sponsors",
    external: true
  },
  {
    label: "Privacy Policy",
    to: "https://privacy.apache.org/policies/privacy-policy-public.html",
    external: true
  }
];
