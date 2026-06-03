# NativeWind v5 Migration

As part of the migration to NativeWind v5 (which enables Tailwind CSS v4 support natively), we have added a `lightningcss` version override in the root `package.json`.

```json
"overrides": {
  "lightningcss": "1.30.1"
}
```

**Note:** This override is recommended by NativeWind v5 documentation to avoid potential deserialization errors during builds. When newer releases of NativeWind v5 become available, this override should be revisited and potentially removed if it is no longer required.
