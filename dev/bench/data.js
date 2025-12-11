window.BENCHMARK_DATA = {
  "lastUpdate": 1765477018564,
  "repoUrl": "https://github.com/kh3rld/apex-sdk",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "kherld.hussein@gmail.com",
            "name": "kh3rld",
            "username": "kh3rld"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ba5a09a4f47d39848b72043c29c4d3df8f2a12a8",
          "message": "chore: update docs and fix ci (#42)\n\n* docs: update broken links\n\n* fix(benches): update file existence check before moving output.txt\n\n* docs: update README",
          "timestamp": "2025-11-24T23:13:48-05:00",
          "tree_id": "ec7b1d20782d2b040d28026553c6db82f6a1f6ec",
          "url": "https://github.com/kherldhussein/apex-sdk/commit/ba5a09a4f47d39848b72043c29c4d3df8f2a12a8"
        },
        "date": 1764044436564,
        "tool": "cargo",
        "benches": [
          {
            "name": "transaction_builder_new",
            "value": 13,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_evm_to_evm_transaction",
            "value": 69,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_substrate_to_substrate_transaction",
            "value": 59,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_cross_chain_transaction",
            "value": 68,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_with_data/32",
            "value": 80,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_with_data/256",
            "value": 82,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_with_data/1024",
            "value": 91,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_with_data/4096",
            "value": 1478,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_hash",
            "value": 1026,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "is_cross_chain_same",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "is_cross_chain_different",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_serialize",
            "value": 292,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_deserialize",
            "value": 439,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_amounts/1",
            "value": 64,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_amounts/1000",
            "value": 64,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_amounts/1000000",
            "value": 64,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_amounts/1000000000000",
            "value": 64,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "548e2134e8f72b8b11c184a2597d5cf37dea4271",
          "message": "ci(deps): bump checkout to 6 (#41)\n\nBumps [actions/checkout](https://github.com/actions/checkout) from 5 to 6.\n- [Release notes](https://github.com/actions/checkout/releases)\n- [Changelog](https://github.com/actions/checkout/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/actions/checkout/compare/v5...v6)\n\n---\nupdated-dependencies:\n- dependency-name: actions/checkout\n  dependency-version: '6'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-12-01T12:03:28-05:00",
          "tree_id": "8907ceabc84521b56c16b0e7d12832d43a1e65d4",
          "url": "https://github.com/kherldhussein/apex-sdk/commit/548e2134e8f72b8b11c184a2597d5cf37dea4271"
        },
        "date": 1764608971751,
        "tool": "cargo",
        "benches": [
          {
            "name": "transaction_builder_new",
            "value": 13,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_evm_to_evm_transaction",
            "value": 69,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_substrate_to_substrate_transaction",
            "value": 60,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_cross_chain_transaction",
            "value": 69,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_with_data/32",
            "value": 80,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_with_data/256",
            "value": 82,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_with_data/1024",
            "value": 88,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_with_data/4096",
            "value": 1470,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_hash",
            "value": 1037,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "is_cross_chain_same",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "is_cross_chain_different",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_serialize",
            "value": 324,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_deserialize",
            "value": 432,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_amounts/1",
            "value": 63,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_amounts/1000",
            "value": 63,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_amounts/1000000",
            "value": 63,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_amounts/1000000000000",
            "value": 63,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kherld.hussein@gmail.com",
            "name": "kh3rld",
            "username": "kh3rld"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0cf0d4c752d32b3a9758d229e638f5404ab76215",
          "message": "chore; add Rust CoC (#46)",
          "timestamp": "2025-12-10T06:51:38-05:00",
          "tree_id": "77ad8a99c8dc3c20ded935822f3acbee03d8bc22",
          "url": "https://github.com/kh3rld/apex-sdk/commit/0cf0d4c752d32b3a9758d229e638f5404ab76215"
        },
        "date": 1765379696736,
        "tool": "cargo",
        "benches": [
          {
            "name": "transaction_creation/create_substrate_transfer",
            "value": 55,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_creation/create_evm_transfer",
            "value": 58,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/substrate_validation/0",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/substrate_validation/1",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/substrate_validation/2",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/evm_validation/0",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/evm_validation/1",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/evm_validation/2",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sdk_initialization/create_substrate_sdk",
            "value": 14,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sdk_initialization/create_evm_sdk",
            "value": 14,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sdk_initialization/create_multi_chain_sdk",
            "value": 30,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_signing/substrate_sign_simulation",
            "value": 161056,
            "range": "± 390",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_signing/evm_sign_simulation",
            "value": 140963,
            "range": "± 474",
            "unit": "ns/iter"
          },
          {
            "name": "amount_operations/amount_creation",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "amount_operations/amount_arithmetic",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kherld.hussein@gmail.com",
            "name": "kh3rld",
            "username": "kh3rld"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b4791a926a26faa957a61e9a7a5c51218e79415d",
          "message": "chore(docs): subdomain redirect (#48)",
          "timestamp": "2025-12-11T12:44:40-05:00",
          "tree_id": "c764f596e785cbb8f9a18571c1e63abbc0dc20c2",
          "url": "https://github.com/kh3rld/apex-sdk/commit/b4791a926a26faa957a61e9a7a5c51218e79415d"
        },
        "date": 1765477017926,
        "tool": "cargo",
        "benches": [
          {
            "name": "transaction_creation/create_substrate_transfer",
            "value": 57,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_creation/create_evm_transfer",
            "value": 58,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/substrate_validation/0",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/substrate_validation/1",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/substrate_validation/2",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/evm_validation/0",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/evm_validation/1",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/evm_validation/2",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sdk_initialization/create_substrate_sdk",
            "value": 14,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sdk_initialization/create_evm_sdk",
            "value": 14,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sdk_initialization/create_multi_chain_sdk",
            "value": 29,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_signing/substrate_sign_simulation",
            "value": 160888,
            "range": "± 444",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_signing/evm_sign_simulation",
            "value": 140826,
            "range": "± 269",
            "unit": "ns/iter"
          },
          {
            "name": "amount_operations/amount_creation",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "amount_operations/amount_arithmetic",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}